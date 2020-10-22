window.onload=function()
{
	// Start Create List Item 
	let btnAdd=document.getElementById(`btnAdd`);
	let i=0;
	btnAdd.onclick=function(){

		var list_name = window.prompt(`Add a name of navigation: `);   //to enable user to enter dynamic list item 

		let addList = document.createElement(`li`);
		let listNode = document.createTextNode(list_name);     //save name which user entered in list
		let colorStyle=listNode.style;  
		addList.appendChild(listNode);   
		document.getElementById(`list`).appendChild(addList);  //show item list

	}
	// End



// Strat for navigation fixed and data scroll  
	let nav_item=document.getElementsByClassName(`nav-item`);
	nav_item.onclick=function (e) {
	    e.preventDefault();
	    this.addClass(`active`).parent().siblings().find(`.nav-item`).removeClass(`active`);

	};

	nav_item.onclick=function(){
	    
	    document.body.animate([
	    {

	        scrollTop : `"#" + this.data("scroll")).offset().top-80`,

	    }],500);
	};

document.body.onscroll=function(){
		let header=document.getElementById(`header`).style;
		let eachall=document.querySelector(`.eachAll`);

		if(window.pageYOffset >= 100)
		{

		    header.position=`fixed`;
		    header.width=`100%`;
		    header.top=`0px`;
		}
		else
		{
			header.position=`relative`;

		}

                var  id = eachall.getAttribute(`id`);

}

// End





}
