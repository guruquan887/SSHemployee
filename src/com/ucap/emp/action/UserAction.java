package com.ucap.emp.action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.opensymphony.xwork2.ActionSupport;

import com.ucap.emp.pojo.User;

public class UserAction extends ActionSupport{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private List<User> mylist;
	
    private Map<String,String> map;  
    
    private Map<String,User> studentMap;  
      
    private Map<String,String[]> arrayMap;  
      
    private Map<String,List<User>> listMap;  
	/**
	 * 从request得到list
	 * @return
	 */ 
	public List<User> getMylist() {		
		return mylist;    
	}
	/**
	 * 把list放到request中
	 * @return 
	 */
	public void setMylist(List<User> list) {
		this.mylist = list;
	}
	
	public String list(){
		
		mylist=new ArrayList<User>();
		
		User user1 = new User();
		user1.setUserId(1L);
		user1.setUserName("zhangsan");
		user1.setUserPwd("123456");		
		mylist.add(user1);
		
		User user2 = new User();		
		user2.setUserId(2L);
		user2.setUserName("lisi");
		user2.setUserPwd("1234");
		mylist.add(user2); 
		
		
		//s:iterator各种遍历用法
      	map=new HashMap<String,String>();  
        map.put("1", "one");  
        map.put("2", "two");  
          
        studentMap=new HashMap<String,User>();  
		User usermap = new User();
		usermap.setUserId(22L);	
		usermap.setUserName("张三");
		usermap.setUserPwd("123456");		
		studentMap.put("student0",usermap);
		studentMap.put("student1",new User(new Long(11111L),"nameok","passwordok")); 
        studentMap.put("student2",new User(new Long(2),"zhangsan","mima"));  
        studentMap.put("student3",new User(new Long(3),"张三2","密码"));   
        
        arrayMap=new HashMap<String,String[]>();  
        arrayMap.put("arr1", new String[]{"1","2003401","leejie"});  
        arrayMap.put("arr2", new String[]{"2","2003402","huanglie"});  
        arrayMap.put("arr3", new String[]{"3","2003403","lixiaoning"});  
          
      
        listMap=new HashMap<String,List<User>>();    
        
        List<User> list0=new ArrayList<User>();
		User usermap1 = new User();		
		usermap1.setUserId(44L);
		usermap1.setUserName("lisi李四");
		usermap1.setUserPwd("1234ss");
		list0.add(usermap1);
		listMap.put("class0", list0);
       
        
        List<User> list1=new ArrayList<User>(); 
        list1.add(new User(new Long(1),"张三1","男"));  
        list1.add(new User(new Long(2),"张三2","男"));  
        list1.add(new User(new Long(3),"张三3","男"));  
        listMap.put("class1", list1); 	          
        List<User> list2=new ArrayList<User>();  
        list2.add(new User(new Long(1),"李四1","男"));  
        list2.add(new User(new Long(2),"李四2","男"));  
        list2.add(new User(new Long(3),"李四3","男"));  
        list2.add(new User(new Long(4),"李四4","男"));  
        listMap.put("class2", list2);  
        
        
        
		return "list";  
	}
	
	
	public Map<String,String> getMap() {
		return map;
	}
	public void setMap(Map<String,String> map) {
		this.map = map;
	}
	public Map<String,User> getStudentMap() {
		return studentMap;
	}
	public void setStudentMap(Map<String,User> studentMap) {
		this.studentMap = studentMap;
	}
	public Map<String,String[]> getArrayMap() {
		return arrayMap;
	}
	public void setArrayMap(Map<String,String[]> arrayMap) {
		this.arrayMap = arrayMap;
	}
	public Map<String,List<User>> getListMap() {
		return listMap;
	}
	public void setListMap(Map<String,List<User>> listMap) {
		this.listMap = listMap;
	}	
	  	
}
