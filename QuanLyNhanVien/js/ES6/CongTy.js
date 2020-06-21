class CongTy{
    constructor(){
        this.danhSachNhanVien = new Array();
    }
    //Phương thức thêm nhân viên mới vào mảng(thuộc tính) danhSachNhanVien
    themNhanVien(nhanVienMoi){
        this.danhSachNhanVien = [...this.danhSachNhanVien, nhanVienMoi];
    }
    //Phương thức tìm nhân viên theo mã nhân viên, trả về vị trí nhân viên trong mảng danhSachNhanVien
    timKiemNhanVien(maNV){
        for(let index in this.danhSachNhanVien){
            console.log(index);
        }
    }
}