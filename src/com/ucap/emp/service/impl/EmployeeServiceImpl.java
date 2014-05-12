package com.ucap.emp.service.impl;

import java.util.List;

import com.ucap.emp.dao.EmployeeDao;
import com.ucap.emp.pojo.Employee;
import com.ucap.emp.service.EmployeeService;

public class EmployeeServiceImpl implements EmployeeService {
	
	private EmployeeDao employeeDao;
	
	public EmployeeDao getEmployeeDao() {
		return employeeDao;   
	}   
	public void setEmployeeDao(EmployeeDao employeeDao) {   
		this.employeeDao = employeeDao;  
	}
	
	//服务层方法

	@Override
	public List<Employee> findAll(Employee employee) {
		// TODO Auto-generated method stub
		return this.employeeDao.findAllEmployee(employee);
	}

	@Override
	public void save(Employee employee) {
		// TODO Auto-generated method stub
		this.employeeDao.saveEmployee(employee);
	}

	@Override
	public Employee findById(Integer id) {
		// TODO Auto-generated method stub
		return this.employeeDao.findEmployeeById(id);
	}

	@Override
	public void update(Employee employee) {
		// TODO Auto-generated method stub
		this.employeeDao.updateEmployee(employee);
	}

	@Override
	public void delete(Employee employee) {
		// TODO Auto-generated method stub
		this.employeeDao.removeEmployee(employee);

	}

}
