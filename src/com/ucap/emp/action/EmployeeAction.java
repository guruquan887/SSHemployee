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
	private EmployeeService employeeService;//该对象采用 Spring依赖注入
	
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
	 * 查询 
	 * @return
	 */     
	public String list(){
		System.out.println("这里是EmployeeAction文件spring功能支持");
		System.out.println("这里是EmployeeAction文件list");
		//list = this.employeeService.findAll(employee); 
		// ServletActionContext.getRequest().setAttribute("list", list); 
		return "list";  
	}
	/**
	 * 增加 
	 * @return
	 */
	public String add(){
		System.out.println("这里是EmployeeAction文件add");
		return "add"; 
	}

	/**
	 * 增加保存 
	 * @param
	 * @return
	 
	public String addSave(){
		this.employeeService.save(this.employee);
		employee=new Employee();
		return list();
	}*/
	
	/**
	 * 更改之前 
	 * @param
	 * @return
	 */
	public String updateBefore(){  
		System.out.println("这里是EmployeeAction文件update");
		//employee=this.employeeService.findById(employee.getId());
		return "update";    
	}
	
	/**
	 * 更改
	 * @param
	 * @return
	
	public String update(){     
		this.employeeService.update(employee);   
		employee=new Employee();  
		return list();  
	}  */
	
	/**
	 * 删除
	 * @param
	 * @return
	 
	public String delete(){ 
		this.employeeService.delete(employee); 
		return list();   
	}*/
}
