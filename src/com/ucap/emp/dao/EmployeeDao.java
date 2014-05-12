package com.ucap.emp.dao;

import java.util.List;

import com.ucap.emp.pojo.Employee;

public interface EmployeeDao {
	
	public void saveEmployee(Employee employee);       
	public void removeEmployee(Employee employee);      
	public void updateEmployee(Employee employee);    
    public Employee findEmployeeById(Integer id);      
    public List<Employee> findAllEmployee(Employee employee);

}
