package com.ucap.emp.dao.impl;

import java.util.List;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.ucap.emp.dao.EmployeeDao;
import com.ucap.emp.pojo.Employee;

public class EmployeeDaoImpl extends HibernateDaoSupport implements EmployeeDao {

	@Override
	public void saveEmployee(Employee employee) {
		// TODO Auto-generated method stub
		this.getHibernateTemplate().save(employee);
	}

	@Override
	public void removeEmployee(Employee employee) {
		// TODO Auto-generated method stub
		this.getHibernateTemplate().delete(employee);

	}

	@Override
	public void updateEmployee(Employee employee) {
		// TODO Auto-generated method stub
		this.getHibernateTemplate().update(employee);

	}

	@Override
	public Employee findEmployeeById(Integer id) {
		// TODO Auto-generated method stub
		Employee employ=(Employee) this.getHibernateTemplate().get(Employee.class, id);   
		return employ;
	}


	@SuppressWarnings("unchecked")
	@Override
	public List<Employee> findAllEmployee(Employee employee) {
		// TODO Auto-generated method stub
		String hql="from Employee  "; 
		String where =" where 1= 1 "; 		
		if(employee.getName()!=null&&!"".equals(employee.getName())){   
			hql+=where+" and name like '%"+employee.getName()+"%' order by id desc";    
		}
		return this.getHibernateTemplate().find(hql); 
	}

}
