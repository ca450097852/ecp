package com.hontek.sys.model;
/**}
 * @ClassName: TsRolePurvDef
 * @Description: TODO(默认角色权限)
 * @date 2015-6-30 下午04:17:06
 * @author qql
 * @version 1.0
 */
public class TsRolePurvDef {
    private Integer purvId;

    private Integer colId;

    private Integer parentId;

    private String colName;

    private String colUrl;

    private Integer colLevel;

    private Integer seq;

    private String iconUrl;

    private Integer typeId;

    public Integer getPurvId() {
        return purvId;
    }

    public void setPurvId(Integer purvId) {
        this.purvId = purvId;
    }

    public Integer getColId() {
        return colId;
    }

    public void setColId(Integer colId) {
        this.colId = colId;
    }

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }

    public String getColName() {
        return colName;
    }

    public void setColName(String colName) {
        this.colName = colName == null ? null : colName.trim();
    }

    public String getColUrl() {
        return colUrl;
    }

    public void setColUrl(String colUrl) {
        this.colUrl = colUrl == null ? null : colUrl.trim();
    }

    public Integer getColLevel() {
        return colLevel;
    }

    public void setColLevel(Integer colLevel) {
        this.colLevel = colLevel;
    }

    public Integer getSeq() {
        return seq;
    }

    public void setSeq(Integer seq) {
        this.seq = seq;
    }

    public String getIconUrl() {
        return iconUrl;
    }

    public void setIconUrl(String iconUrl) {
        this.iconUrl = iconUrl == null ? null : iconUrl.trim();
    }

    public Integer getTypeId() {
        return typeId;
    }

    public void setTypeId(Integer typeId) {
        this.typeId = typeId;
    }
}