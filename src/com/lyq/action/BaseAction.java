package com.lyq.action;

import java.util.HashSet;
import java.util.Map;
import java.util.Set;


import org.apache.struts2.interceptor.RequestAware;
import org.apache.struts2.interceptor.SessionAware;
import org.apache.struts2.interceptor.ApplicationAware;
import org.springframework.beans.factory.annotation.Autowired;


import com.lyq.dao.product.ProductCategoryDao;

import com.opensymphony.xwork2.ActionSupport;
/**
 * ����Action��������Action�ĸ���
 * @author Li Yongqiang
 */
public class BaseAction extends ActionSupport implements RequestAware,
		SessionAware, ApplicationAware {
	private static final long serialVersionUID = 1L;
	
	protected Integer id;
	protected Integer[] ids;
	protected int pageNo = 1;//��ǰҳ
	protected int pageSize = 5;//ÿҳ��ʾ������
	
	// ע��Dao
	@Autowired
	protected ProductCategoryDao categoryDao;


	// Map���͵�request
	protected Map<String, Object> request;
	// Map���͵�session
	protected Map<String, Object> session;
	// Map���͵�application
	protected Map<String, Object> application;
	
	public static final String MANAGER = "manager";
	public static final String LEFT = "left";
	public static final String RIGHT = "right";
	public static final String TOP = "top";
	public static final String ADD = "add";
	public static final String LIST = "list";
	public static final String EDIT = "edit";
	public static final String SELECT = "select";
	public static final String QUERY = "query";
	public static final String INDEX = "index";
	public static final String LOGIN = "login";
	public static final String REG = "reg";
	public static final String LOGOUT = "logout";
	public static final String CUSTOMER_LOGIN = "customerLogin";
	public static final String ADMIN_LOGIN = "adminLogin";

	
	// ������
	public String manager() throws Exception {
		return MANAGER;
	}
	public String top() throws Exception {
		return TOP;
	}
	public String left() throws Exception {
		return LEFT;
	}
	public String right() throws Exception {
		return RIGHT;
	}
	public String add() throws Exception {
		return ADD;
	}
	public String select() throws Exception {
		return SELECT;
	}
	public String query() throws Exception{
		return QUERY;
	}
	public String login() throws Exception{
		return LOGIN;
	}
	public String reg() throws Exception{
		return REG;
	}
	/**
	 * ���ڻ��ڴ������չ�����ֱ��INDEX������ҳ��
	 * @return
	 * @throws Exception
	 */
	public String index() throws Exception {
		return INDEX;
	}
	/**
	 * �̳���дActionSupport
	 */
	@Override
	public String execute() throws Exception {
		return SUCCESS;
	}


	
	
	@Override
	public void setRequest(Map<String, Object> request) {
		// ��ȡMap���͵�request��ֵ
		this.request = request;
	}
	/**
	 * ��ȡMap���͵�session��ֵ
	 */
	@Override
	public void setSession(Map<String, Object> session) {
		// ��ȡMap���͵�session��ֵ
		this.session = session;
	}
	@Override
	public void setApplication(Map<String, Object> application) {
		// ��ȡMap���͵�application��ֵ
		this.application = application;
	}
	
	
	// getter��settter����
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer[] getIds() {
		return ids;
	}
	public void setIds(Integer[] ids) {
		this.ids = ids;
	}
	public int getPageNo() {
		return pageNo;
	}
	public void setPageNo(int pageNo) {
		this.pageNo = pageNo;
	}


}
