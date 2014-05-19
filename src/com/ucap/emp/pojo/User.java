package com.ucap.emp.pojo;

public class User {
	
    private Long userId;
    private String userName;
    private String userPwd;


    public User() {
		// TODO Auto-generated constructor stub
	}
    public User(Long userId, String userName, String userPwd) {
		// TODO Auto-generated constructor stub
        this.userId = userId;
        this.userName = userName;
        this.userPwd = userPwd;
	}
	//getºÍset·½·¨
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserPwd() {
		return userPwd;
	}
	public void setUserPwd(String userPwd) {
		this.userPwd = userPwd;
	}

}
