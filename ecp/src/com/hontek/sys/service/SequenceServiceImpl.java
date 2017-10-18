package com.hontek.sys.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.sys.dao.SequenceDao;
import com.hontek.sys.model.Sequence;

@Service("sequenceService")
public class SequenceServiceImpl implements SequenceService {

	@Autowired
	private SequenceDao sequenceDao;
	
	public int getSequence(String tableName) throws RuntimeException{
		
		Integer currentValue = sequenceDao.selectSeqByTableName(tableName);		
		
		if(currentValue==null){
			currentValue = 1;
			Sequence sequence = new Sequence(tableName, currentValue, 1, 2147483647, 0, 10, 0, "", "");
			sequenceDao.add(sequence);
		}else{
			currentValue +=1; 
			sequenceDao.update(tableName,currentValue);
		}
				
		return currentValue;
	}

}
