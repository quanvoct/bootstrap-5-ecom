# bootstrap-5-ecom
Bộ giao diện dự án website Phù Sa Genomics
Framework - Bootstrap 5
Nguồn: bootstrap-ecommerce.com
Chỉnh sửa bởi Võ Minh Quân

25/7
Fixbug: Hiển thị thông báo cho người dùng sau khi đã cập nhật thông tin (hoặc mật khẩu)
Fixbug: Hiển thị đúng hạng người dùng trong trang thông tin người dùng
Update: Chức năng quét mã chuyển khoản và hiển thị thông tin chuyển khoản cho người dùng khi hoàn tất đơn hàng
Update: Đưa toàn bộ dữ liệu khách hàng lên cơ sở dữ liệu (Bao gồm tất cả các lần bổ sung cho đến hiện tại)
Fixbug: Nếu các sản phẩm phụ có giá bằng nhau thì chỉ hiển thị 1 giá trên danh sách sản phẩm
Update: Thêm cột số thứ tự cho danh sách Oligo, Ẩn cột dự xuất, 
Update: Ẩn chức năng well-labelled của sản phẩm plate
Fixbug: Ẩn chức năng nhập danh sách và nhập excel trên probe và modified
Update: Trình tự oligo có normalization > 0 thì thêm phụ phí 2000
Fixbug: Trình tự oligo có tùy chọn sấy thì normalization = 0
Update: Ẩn dòng tổng kết Oligo (VD: 121 trình tự sẽ được chứa trong 3 hộp 45)
Fixbug: Sửa lỗi tiêu đề cột danh sách Oligo (xóa cột thừa)
Fixbug: Ẩn dòng plateHint, chỉ hiển thị với sản phẩm là plate (VD: Mẹo: Bạn có thể click vào cột, hàng hoặc từng ô riêng lẻ để thêm những giếng trống vào plate)

27/7
Update: Ẩn giá trên phần mô tả ngắn đối với sản phẩm Oligo
Update: Thay đổi cách hiển thị các phụ phí oligo đồng thời tối ưu code để tránh lỗi phát sinh
Update: Thêm diễn giải với các phụ phí, tùy chỉnh trong danh sách oligo đã nhập
Update: Thêm diễn giải quy cách đóng gói sản phẩm Oligo
Update: Cập nhật số hộp đóng gói sản phẩm oligo (bỏ hộp 96, chỉ còn hộp 20 và 45)
Update: Bố trí lại vị trí xuất dữ liệu số lượng và đơn giá oligo cho từng hộp
Update: Thêm phụ phí đóng gói 20.000đ đối với gói oligo ít hơn 500.000đ
Fixbug: Sửa lỗi hiển thị nút xếp ngang và xếp dọc che mất nút thêm vào giỏ hàng trên mobile
Fixbug: Sửa lỗi hiển thị ô đặt tên cho plate lệch xuống hàng
Fixbug: Sửa lỗi không nhập dược trình tự GGGGGG
Fixbug: Sửa lỗi bảng sắp xếp trình tự vào plate quá hẹp trên di động
Fixbug: Sửa lỗi không hiển thị tab sửa oligo khi click nút sửa chuỗi oligo
Fixbug: Sửa lỗi không sửa được trình tự đã nhập
Update: Tự động chuyển về khung sửa trình tự khi click vào edit

28/7
Update: Nếu đã nhập bất kỳ chuỗi trình tự nào thành công thì khi đóng cửa sổ hoặc reload sẽ phải confirm nhằm tránh click nhầm
Update: Nếu sản phẩm thuộc nhóm Oligo Plate thì mặc định hình thức xử lý là wet, không cần phải chọn
Update: Nếu sản phẩm là Oligo Modified thì phải chọn ít nhất 1 đầu modified
Update: Nếu sản phẩm là Oligo Probe thì phải chọn ít nhất 1 probe
Update: Cập nhật cấu trúc xác thực chuỗi nhập vào. Cho phép hiển thị nhiều lỗi hơn
Update: Tối ưu code đặt hàng Oligo cho khung nhập dữ liệu và phần định dạng dữ liệu trước khi xác thực hoặc đưa vào danh sách
Fixbug: Cập nhật tính năng sửa trình tự là sẽ sửa tất cả các trình tự có cùng tên. Tránh gây lỗi trùng tên nhưng không trùng trình tự
Fixbug: Trình tự có cùng tên thì cũng phải trùng luôn cả đầu 5', đầu 3' (hoặc probe)
Update: Chỉ được thêm cột trống hoặc hàng trống hoặc ô trống khi plate không có ô trống nào khác
Update: Thêm cột vị trí vào danh sách oligo sau khi sắp xếp (thể hiện vị trí của trình tự trên plate)