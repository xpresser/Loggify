package com.devcamp.loggingsystem.service.bean;

import com.devcamp.loggingsystem.exception.TimeSheetRowNotFoundException;
import com.devcamp.loggingsystem.persistence.entity.TimesheetRow;
import com.devcamp.loggingsystem.persistence.repository.TimeSheetRowRepository;
import com.devcamp.loggingsystem.service.TimeSheetRowService;
import com.devcamp.loggingsystem.service.dto.timesheetrowdto.TimeSheetRowDTO;
import com.devcamp.loggingsystem.service.dto.timesheetrowdto.TimeSheetRowFullDTO;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

/**
 * @author Stanislav Ivanov
 */
@Service
public class TimeSheetRowServiceBean implements TimeSheetRowService {

    private ModelMapper modelMapper;
    private final TimeSheetRowRepository timeSheetRowRepository;

    @Autowired
    public TimeSheetRowServiceBean(ModelMapper modelMapper, TimeSheetRowRepository timeSheetRowRepository) {
        this.modelMapper = modelMapper;
        this.timeSheetRowRepository = timeSheetRowRepository;
    }

    @Override
    public TimeSheetRowFullDTO getTimeSheetRowById(Long timeSheetRowId) throws TimeSheetRowNotFoundException {
        TimesheetRow timeSheetRow = timeSheetRowRepository.findById(timeSheetRowId)
                .orElseThrow(TimeSheetRowNotFoundException::new);
        return modelMapper.map(timeSheetRow, TimeSheetRowFullDTO.class);
    }

    @Override
    public Page<TimeSheetRowFullDTO> getAllTimeSheetRowsByPages(int pageNumber, int numberOfElementsPerPage) {
        return timeSheetRowRepository.findAll(PageRequest.of(pageNumber, numberOfElementsPerPage)
        ).map(drug -> modelMapper.map(drug, TimeSheetRowFullDTO.class));

    }

    @Override
    public TimeSheetRowFullDTO createTimeSheetRow(TimeSheetRowDTO timeSheetRowDTO) {
        TypeMap<TimeSheetRowDTO,TimesheetRow> typeMap = modelMapper.getTypeMap(TimeSheetRowDTO.class,TimesheetRow.class);
        if(typeMap== null) {
            modelMapper.addMappings(new PropertyMap<TimeSheetRowDTO, TimesheetRow>() {
                protected void configure() {
                    skip().setId(0L);
                }
            });
        }
        TimesheetRow timesheetRow = modelMapper.map(timeSheetRowDTO, TimesheetRow.class);
        timeSheetRowRepository.save(timesheetRow);
        return modelMapper.map(timesheetRow, TimeSheetRowFullDTO.class);
    }

    @Override
    public TimeSheetRowFullDTO updateTimeSheetRow(Long timeSheetRowId, TimeSheetRowDTO timeSheetRowDTO)
            throws TimeSheetRowNotFoundException {
        TypeMap<TimeSheetRowDTO,TimesheetRow> typeMap = modelMapper.getTypeMap(TimeSheetRowDTO.class,TimesheetRow.class);
        if(typeMap== null) {
            modelMapper.addMappings(new PropertyMap<TimeSheetRowDTO, TimesheetRow>() {
                protected void configure() {
                    skip().setId(0L);
                }
            });
        }
        TimeSheetRowFullDTO timeSheetRowFullDTO = getTimeSheetRowById(timeSheetRowId);
        TimesheetRow timesheetRow = modelMapper.map(timeSheetRowFullDTO, TimesheetRow.class);
        timesheetRow.update(modelMapper.map(timeSheetRowDTO, TimesheetRow.class));
        return modelMapper.map(timeSheetRowRepository.save(timesheetRow), TimeSheetRowFullDTO.class);
    }

    @Override
    public TimeSheetRowFullDTO deleteTimeSheetRow(Long timeSheetRowId) throws TimeSheetRowNotFoundException {
        TimesheetRow timeSheetRow = timeSheetRowRepository.findById(timeSheetRowId)
                .orElseThrow(TimeSheetRowNotFoundException::new);
        timeSheetRowRepository.deleteById(timeSheetRowId);
        return modelMapper.map(timeSheetRow, TimeSheetRowFullDTO.class);
    }

}
