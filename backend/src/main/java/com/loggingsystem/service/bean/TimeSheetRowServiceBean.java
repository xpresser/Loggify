package com.loggingsystem.service.bean;

import com.loggingsystem.exception.TimeSheetRowNotFoundException;
import com.loggingsystem.exception.TimesheetNotFoundException;
import com.loggingsystem.persistence.entity.TimesheetRow;
import com.loggingsystem.persistence.repository.TimeSheetRowRepository;
import com.loggingsystem.service.TimeSheetRowService;
import com.loggingsystem.service.dto.timesheetrowdto.TimeSheetRowDTO;
import com.loggingsystem.service.dto.timesheetrowdto.TimeSheetRowFullDTO;
import com.loggingsystem.service.dto.timesheetrowdto.TimesheetFullRowCollectionDTO;
import com.loggingsystem.service.dto.timesheetrowdto.TimesheetRowCollectionDTO;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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
    public TimesheetFullRowCollectionDTO createTimeSheetRows(TimesheetRowCollectionDTO rowCollectionDTO) throws TimesheetNotFoundException {

        List<TimeSheetRowDTO> rowsDTOs = rowCollectionDTO.getRows();

        List<TimeSheetRowFullDTO> result = rowsDTOs.stream()
                .map(this::createTimeSheetRow)
                .collect(Collectors.toList());

        TimesheetFullRowCollectionDTO fullRowCollectionDTO = new TimesheetFullRowCollectionDTO();
        fullRowCollectionDTO.setRows(result);

        return fullRowCollectionDTO;
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
