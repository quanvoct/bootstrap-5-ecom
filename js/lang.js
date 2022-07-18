if (window.location.href.includes('/en')) {
    var colName = 'Name',
        colSequence = 'Sequence string',
        wet = 'Wet',
        dry = 'Dry',
        yes = 'Yes',
        no = 'No',
        colLength = 'Length',
        colOD = 'OD',
        colType = 'Type',
        colStatus = 'Dry',
        colNormalization = 'Normalization',
        colUnitPrice = 'Unit Price',
        colFee = 'Surcharges',
        colTotal = 'Amount',
        subTotalLabel = 'Total Amount',
        colEDD = 'EDD',
        guideText = 'Fill above form and click',
        editBtnLabel = 'Edit',
        addBtnLabel = 'Add',
        statusLabel = 'Dry before packaging',
        invalidLetter = 'Invalid base at',
        noEmptyName = 'Empty sequence name is not accepted. ',
        existName = 'Sequence name already exists. ',
        letter = ' letters. ',
        minNameLengthText = 'Sequence name must be at least ',
        maxNameLengthText = 'Sequence name can be up to ',
        difficultOligo = 'Oligo sequence is difficult, PHUSA Biochem does not guarantee the OD and purity of this oligo!',
        noEmptyString = 'Empty sequence is not accepted. ',
        base = ' base. ',
        minStringLengthText = 'Oligo sequence must be at least ',
        maxStringLengthText = 'Sequence of this oligo can be up to ',
        addToCartLabel = 'Add to cart',
        oligoTitle = 'Choose processing way and custom normalization',
        noCustom = 'No custom normalization',
        confirmChosenLabel = 'Confirm your all chosen',
        beginOligoLabel = 'Import oligo',
        oligoSingleTabLabel = 'Add single line',
        oligoSingleTitle = 'Input single line',
        oligoEditTabLabel = 'Edit sequence',
        oligoEditTitle = 'Edit sequence and update',
        oligoListBtnLabel = 'Add data',
        oligoListTabLabel = 'Multi-line import',
        oligoListTitle = 'Import multi-line via Excel copy/paste',
        oligoListPlaceholder = 'Copy all name and sequence Oligo from Excel/Google docs and paste here',
        oligoExcelBtnLabel = 'Import',
        oligoExcelTabLabel = 'Import from Excel',
        oligoExcelTitle = 'Import from Excel',
        oligoExcelPlaceholder = 'Drag and drop your Oligo spreadsheet here',
        confirmOligoLabel = 'I confirm this Oligo list are all correct',
        btnHorizonLabel = 'Horizon',
        btnVerticalLabel = 'Vertical',
        generalErrText = 'Something was wrong! Please review your data once more.',
        plateHintText = 'Click on column, row or well plate to insert some empty well plate.',
        plateLabelLabelText = 'Plate label',
        plateLabelPlaceholder = 'Default: ',
        wellLabelText = 'Create well label',
        surchagesText = 'Surchages',
        processing = 'processing',
        basePlateArrangeFeeText = 'Base plate arrange fee: ',
        plateNameFeeText = 'Plate named fee: ',
        wellNameFeeText = 'Well labeled fee: ',
        totalSurchagesText = 'Total surchages: ';
} else {
    var colName = 'Tên',
        colSequence = 'Chuỗi trình tự',
        wet = 'Ướt',
        dry = 'Khô',
        yes = 'Có',
        no = 'Không',
        colLength = 'Độ dài',
        colOD = 'OD',
        colType = 'Loại Oligo',
        colStatus = 'Sấy',
        colNormalization = 'Tiêu chuẩn',
        colUnitPrice = 'Đơn giá',
        colFee = 'Phụ phí',
        colTotal = 'Thành tiền',
        subTotalLabel = 'Tổng thành tiền',
        colEDD = 'Dự xuất',
        guideText = 'Nhập chuỗi Oligo vào form bên trên và nhấn',
        editBtnLabel = 'Sửa',
        addBtnLabel = 'Thêm',
        statusLabel = 'Sấy khô thành phẩm',
        invalidLetter = 'Chuỗi không hợp lệ tại vị trí',
        noEmptyName = 'Tên chuỗi không được bỏ trống.',
        existName = 'Tên chuỗi không được trùng với tên đã nhập. ',
        letter = ' ký tự. ',
        minNameLengthText = 'Tên chuỗi tối thiểu phải từ ',
        maxNameLengthText = 'Tên chuỗi tối đa phải dưới ',
        difficultOligo = 'Trình tự Oligo phức tạp, PHUSA Biochem không đảm bảo OD và độ tinh sạch của oligo này!',
        noEmptyString = 'Chuỗi Oligo không được bỏ trống. ',
        base = ' base. ',
        minStringLengthText = 'Chuỗi Oligo tối thiểu phải từ ',
        maxStringLengthText = 'Chuỗi Oligo tối đa phải dưới ',
        addToCartLabel = 'Thêm vào giỏ hàng',
        oligoTitle = 'Chọn hình thức xử lý và tùy chỉnh',
        noCustom = 'Không tùy chỉnh',
        confirmChosenLabel = 'Xác nhận các lựa chọn',
        beginOligoLabel = 'Bắt đầu nhập trình tự',
        oligoSingleTabLabel = 'Thêm từng dòng',
        oligoSingleTitle = 'Thêm từng trình tự',
        oligoEditTabLabel = 'Sửa trình tự',
        oligoEditTitle = 'Sửa trình tự hiện có',
        oligoListBtnLabel = 'Thêm danh sách',
        oligoListTabLabel = 'Nhập danh sách',
        oligoListTitle = 'Nhập danh sách các trình tự',
        oligoListPlaceholder = 'Sao chép tên và nội dung trình tự từ bảng tính Excel/Google Docs vào đây',
        oligoExcelBtnLabel = 'Nhập dữ liệu',
        oligoExcelTabLabel = 'Nhập từ Excel',
        oligoExcelTitle = 'Nhập dữ liệu từ file Excel',
        oligoExcelPlaceholder = 'Kéo file Excel dữ liệu Oligo của bạn và thả vào đây',
        confirmOligoLabel = 'Xác nhận tất cả thông tin đã nhập đều đúng',
        btnHorizonLabel = 'Xếp ngang',
        btnVerticalLabel = 'Xếp dọc',
        generalErrText = 'Đã có lỗi xảy ra! Vui lòng kiểm tra lại dữ liệu của bạn.',
        plateHintText = 'Mẹo: Bạn có thể click vào cột, hàng hoặc từng ô riêng lẻ để thêm những giếng trống vào plate.',
        plateLabelLabelText = 'Thêm nhãn cho plate',
        plateLabelPlaceholder = 'Mặc định là: ',
        wellLabelText = 'Dán nhãn cho từng giếng',
        surchagesText = 'Phụ phí: ',
        processing = 'Đang xử lý',
        basePlateArrangeFeeText = 'Phí sắp xếp khay cơ bản: ',
        plateNameFeeText = 'Phí dán nhãn khay: ',
        wellNameFeeText = 'Phí dán nhãn từng giếng: ',
        totalSurchagesText = 'Tổng phụ phí: ';
}