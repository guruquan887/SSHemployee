package com.lyq.action;

import java.util.List;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.lyq.model.product.ProductCategory;
//import com.lyq.model.product.ProductInfo;

@Scope("prototype")
@Controller("indexAction")
public class IndexAction extends BaseAction {
	private static final long serialVersionUID = 1L;
	
	// �������
	private List<ProductCategory> categories;
	/**
	 * 
	
	// �Ƽ���Ʒ
	private List<ProductInfo> product_commend;
	// ������õ���Ʒ
	private List<ProductInfo> product_sellCount;
	// ������ߵ���Ʒ
	private List<ProductInfo> product_clickcount;
	*/

	public List<ProductCategory> getCategories() {
		return categories;
	}


	public void setCategories(List<ProductCategory> categories) {
		this.categories = categories;
	} 

	/**
	 * 
	 * 	
	public List<ProductInfo> getProduct_commend() {
		return product_commend;
	}


	public void setProduct_commend(List<ProductInfo> product_commend) {
		this.product_commend = product_commend;
	}


	public List<ProductInfo> getProduct_sellCount() {
		return product_sellCount;
	}


	public void setProduct_sellCount(List<ProductInfo> product_sellCount) {
		this.product_sellCount = product_sellCount;
	}


	public List<ProductInfo> getProduct_clickcount() {
		return product_clickcount;
	}


	public void setProduct_clickcount(List<ProductInfo> product_clickcount) {
		this.product_clickcount = product_clickcount;
	}
	 */

	/**
	 * �̳���дBaseAction
	 */
	@Override
	public String execute() throws Exception {
		// ��ѯ�������
		String where = "where parent is null";
		categories = categoryDao.find(-1, -1, where, null).getList();
		/**
		 * 
		// ��ѯ�Ƽ�����Ʒ
		product_commend = productDao.findCommend();
		// ��ѯ������ߵ���Ʒ
		product_sellCount = productDao.findSellCount();
		// ��ѯ�����ߵ���Ʒ
		product_clickcount = productDao.findClickcount();
		 */
		return SUCCESS;
	}
	public String categoryindex() throws Exception {
		// ��ѯ�������
		String where = "where parent is null";
		categories = categoryDao.find(-1, -1, where, null).getList();
		/**
		 * 
		// ��ѯ�Ƽ�����Ʒ
		product_commend = productDao.findCommend();
		// ��ѯ������ߵ���Ʒ
		product_sellCount = productDao.findSellCount();
		// ��ѯ�����ߵ���Ʒ
		product_clickcount = productDao.findClickcount();
		 */
		return SUCCESS;
	}
		
}
