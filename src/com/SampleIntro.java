package com;

import java.sql.*;

public class SampleIntro
{
  public static void main(String[] args)
  {
    try
    {
      Connection conn;
      Statement stmt;
      ResultSet res;
      //加载Connector/J驱动
     //这一句也可写为：Class.forName("com.mysql.jdbc.Driver");
      Class.forName("com.mysql.jdbc.Driver").newInstance();
      //建立到MySQL的连接
     conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/guruquan",
                                         "root", "root");
      //执行SQL语句
     stmt = conn.createStatement();
      res = stmt.executeQuery("select * from tb_shark_config");
      //处理结果集
     while (res.next())
      {
        String id = res.getString("id");
        System.out.println(id);
        Date n = res.getDate("createTime");
        System.out.println(n);
      }
      res.close();

    }
    catch (Exception ex)
    {
      System.out.println("Error : " + ex.toString()+"链接数据库错误。database connection error！");
    }
  }
}
