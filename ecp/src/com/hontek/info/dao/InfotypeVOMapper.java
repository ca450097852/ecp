package com.hontek.info.dao;

import com.hontek.info.modelDO.InfotypeVO;
import com.hontek.info.modelDO.InfotypeVOExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface InfotypeVOMapper {
    int countByExample(InfotypeVOExample example);

    int deleteByExample(InfotypeVOExample example);

    int deleteByPrimaryKey(Integer typeId);

    int insert(InfotypeVO record);

    int insertSelective(InfotypeVO record);

    List<InfotypeVO> selectByExample(InfotypeVOExample example);

    InfotypeVO selectByPrimaryKey(Integer typeId);

    int updateByExampleSelective(@Param("record") InfotypeVO record, @Param("example") InfotypeVOExample example);

    int updateByExample(@Param("record") InfotypeVO record, @Param("example") InfotypeVOExample example);

    int updateByPrimaryKeySelective(InfotypeVO record);

    int updateByPrimaryKey(InfotypeVO record);
}