package com.ucap.emp.action;

//import java.util.List;

import com.opensymphony.xwork2.ActionSupport;
//import org.apache.struts2.ServletActionContext;

//import com.ucap.emp.pojo.Employee;  
//import com.ucap.emp.service.EmployeeService; 

public class EmployeeAction extends ActionSupport{

 
	private static final long serialVersionUID = 1L;
	/**
	 *
	private Employee employee;
	private List<Employee> list;
	private EmployeeService employeeService;//�ö������ Spring����ע��
	
	public List<Employee> getList() {		
		return list;    
	}
	public void setList(List<Employee> list) {
		this.list = list;
	}
	public EmployeeService getEmployeeService() {
		return employeeService;
	}
	public void setEmployeeService(EmployeeService employeeService)  {
		this.employeeService = employeeService;
	}
	public Employee getEmployee() {
		return employee;    
	}
	public void setEmployee(Employee employee) {
		this.employee = employee;   
	} 
	*/
	/**
	 * ��ѯ 
	 * @return
	 */     
	public String list(){
		System.out.println("������EmployeeAction�ļ�spring����֧��");
		System.out.println("������EmployeeAction�ļ�list");
		//list = this.employeeService.findAll(employee); 
		// ServletActionContext.getRequest().setAttribute("list", list); 
		return "list";  
	}
	/**
	 * ���� 
	 * @return
	 */
	public String add(){
		System.out.println("������EmployeeAction�ļ�add");
		return "add"; 
	}

	/**
	 * ���ӱ��� 
	 * @param
	 * @return
	 
	public String addSave(){
		this.employeeService.save(this.employee);
		employee=new Employee();
		return list();
	}*/
	
	/**
	 * ����֮ǰ 
	 * @param
	 * @return
	 */
	public String updateBefore(){  
		System.out.println("������EmployeeAction�ļ�update");
		//employee=this.employeeService.findById(employee.getId());
		return "update";    
	}
	
	/**
	 * ����
	 * @param
	 * @return
	
	public String update(){     
		this.employeeService.update(employee);   
		employee=new Employee();  
		return list();  
	}  */
	
	/**
	 * ɾ��
	 * @param
	 * @return
	 
	public String delete(){ 
		this.employeeService.delete(employee); 
		return list();   
	}*/
}
