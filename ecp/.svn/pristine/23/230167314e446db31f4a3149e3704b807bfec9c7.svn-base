package com.hontek.info.dao;

import com.hontek.info.modelDO.InfoVO;
import com.hontek.info.modelDO.InfoVOExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface InfoVOMapper {
    int countByExample(InfoVOExample example);

    int deleteByExample(InfoVOExample example);

    int deleteByPrimaryKey(Integer infoId);

    int insert(InfoVO record);

    int insertSelective(InfoVO record);

    List<InfoVO> selectByExampleWithBLOBs(InfoVOExample example);

    List<InfoVO> selectByExample(InfoVOExample example);

    InfoVO selectByPrimaryKey(Integer infoId);

    int updateByExampleSelective(@Param("record") InfoVO record, @Param("example") InfoVOExample example);

    int updateByExampleWithBLOBs(@Param("record") InfoVO record, @Param("example") InfoVOExample example);

    int updateByExample(@Param("record") InfoVO record, @Param("example") InfoVOExample example);

    int updateByPrimaryKeySelective(InfoVO record);

    int updateByPrimaryKeyWithBLOBs(InfoVO record);

    int updateByPrimaryKey(InfoVO record);
}