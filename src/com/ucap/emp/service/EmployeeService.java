package com.ucap.emp.service;

import java.util.List;

import com.ucap.emp.pojo.Employee;

public interface EmployeeService {
	
	public List<Employee> findAll(Employee employee);

	public void save(Employee employee);

	public Employee findById(Integer id);

	public void update(Employee employee);

	public void delete(Employee employee);

}
