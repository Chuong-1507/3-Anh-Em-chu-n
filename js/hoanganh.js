function xn() 
{
    let thoigian = document.getElementById("thoigian").value;
    let nguoilon = document.getElementById("nguoilon").value;
    let trecon = document.getElementById("trecon").value;
    let hoten = document.getElementById("hoten").value;
    let sdt = document.getElementById("sdt").value; 
	
    if (thoigian == "" || hoten == "" || sdt == ""||nguoilon==""||nguoilon<=0||trecon<0) 
		{

			document.getElementById("ketqua").innerHTML = "Vui lòng điền đầy đủ thông tin";
			document.getElementById("ketqua").style.color = "red";
			return;
		} 
    else 
		{
			let xd = confirm("Bạn có chắc muốn đặt bàn không?");
				
			if (xd) 
				{
					document.getElementById("ketqua").innerHTML = "Bạn đã đặt bàn thành công!";
					document.getElementById("ketqua").style.color = "green";
				} 
			else 
				{	
					document.getElementById("ketqua").innerHTML = "Bạn chưa đặt bàn thành công!";
					document.getElementById("ketqua").style.color = "red";
				}
		}
}
