var dryFee = 30000, lowNu = 25000,
    oligoTitleText = document.querySelector('.oligo-title'),
    noCustomLabel = document.querySelector('.no-custom'),
    oligoName = document.getElementById('oligo-name'),
    oligoString = document.getElementById('oligo-string'),
    oligoList = document.getElementById('oligo-list'),
    oligoSubmit = document.getElementById('oligo-submit'),
    oligoEdit = document.getElementById('oligo-edit'),
    validateForm = document.getElementById('validate-form'),
    stringCounter = document.getElementById('string-counter'),
    addToCartOligo = document.querySelector('.add-to-cart-oligo'),
    navSingle = document.querySelector('.nav-single'),
    tabSingle = document.getElementById('tab_single'),
    titleSingle = document.querySelector('.title-single'),

    titleList = document.querySelector('.title-list'),
    oligoListBtn = document.getElementById('oligo-list-btn'),
    oligoListInput = document.getElementById('oligo-list-input'),
    navList = document.querySelector('.nav-list'),
    tabList = document.getElementById('tab_list'),

    titleExcel = document.querySelector('.title-excel'),
    oligoExcelBtn = document.getElementById('oligo-excel-btn'),
    oligoExcelInput = document.getElementById('oligo-excel-input'),
    navExcel = document.querySelector('.nav-excel'),
    tabExcel = document.getElementById('tab_excel'),
    excelProcess = document.querySelector('.excel-process'),
    excelDragDrop = document.querySelector('.drag-drop-placeholder'),

    oligoNormalization = document.getElementById('oligo-normalization'),
    checkConfirmOligoNormalization = document.getElementById('check-confirm-oligo-normalization'),
    labelConfirmOligoNormalization = document.getElementById('label-confirm-oligo-normalization'),
    wetBtn = document.querySelector('.btn-wet'),
    dryBtn = document.querySelector('.btn-dry'),
    oligoStatus = document.getElementById('oligo-status'),
    btnBeginOligo = document.querySelector('.btn-begin'),
    cardOligoSelect = document.querySelector('.card-oligo-select'),
    cardOligoInput = document.querySelector('.card-oligo-input'),
    cardOligoShow = document.querySelector('.card-oligo-show'),

    oligoArrange = document.getElementById('oligo-arrange'),
    cardOligoArrange = document.querySelector('.card-oligo-arrange'),
    confirmOligo = document.querySelector('.confirm-oligo'),
    btnHorizon = document.querySelector('.btn-horizon'),
    btnVertical = document.querySelector('.btn-vertical'),

    oligoType = document.getElementById('oligo-type'),
    nameLength = document.getElementById('name-length').innerHTML.split(","),
    stringLength = document.getElementById('string-length').innerHTML.split(","),
    odList = document.getElementById('od-list').innerHTML.split(","),
    typeList = document.getElementById('type-list').innerHTML.split(","),
    normalizationList = document.getElementById('normalization-list').innerHTML.split(","),
    turnAroundTimeList = document.getElementById('turn-around-time-list').innerHTML.split(","),
    unitPriceList = document.getElementById('unit-price-list').innerHTML.split(","),
    baseList = document.getElementById('base-list').innerHTML;

oligoTitleText.innerText = oligoTitle;
noCustomLabel.innerHTML = noCustom;
labelConfirmOligoNormalization.innerText = confirmChosenLabel;
oligoName.placeholder = colName;
oligoString.placeholder = colSequence;
btnBeginOligo.innerHTML = beginOligoLabel;
wetBtn.innerHTML = wet;
dryBtn.innerHTML = dry;
oligoSubmit.innerHTML = addBtnLabel;
oligoEdit.innerHTML = editBtnLabel;
addToCartOligo.innerHTML = addToCartLabel;
oligoExcelBtn.innerHTML = oligoExcelBtnLabel;
oligoListBtn.innerHTML = oligoListBtnLabel;
confirmOligo.innerHTML = confirmOligoLabel;
btnHorizon.innerText = btnHorizonLabel;
btnVertical.innerText = btnVerticalLabel;

navList.innerText = oligoListTabLabel;
navSingle.innerText = oligoSingleTabLabel;
navExcel.innerText = oligoExcelTabLabel;
titleSingle.innerText = oligoSingleTitle;
titleList.innerText = oligoListTitle;
oligoListInput.placeholder = oligoListPlaceholder;
titleExcel.innerText = oligoExcelTitle;
excelDragDrop.innerText = oligoExcelPlaceholder;

var productArr = [];

oligoList.innerHTML = displayOligo(productArr);

if (productArr.length > 0) {
    window.onbeforeunload = function (e) {
        return 'Bạn có chắc chắn không?';
    };
}

btnBeginOligo.addEventListener('click', function (e) {
    e.preventDefault();
    cardOligoSelect.classList.add('d-none');
    cardOligoInput.classList.remove('d-none');
    cardOligoShow.classList.remove('d-none');
})

wetBtn.addEventListener('click', function () {
    oligoStatus.innerText = 'wet';
    oligoNormalization.classList.remove('d-none');
    checkConfirmOligoNormalization.classList.remove('d-none');
    labelConfirmOligoNormalization.classList.remove('d-none');
    btnBeginOligo.disabled = true;
    addOption(normalizationList);
    checkConfirmOligoNormalization.addEventListener('click', function () {
        btnBeginOligo.disabled = (checkConfirmOligoNormalization.checked == true) ? false : true;
    })
})

dryBtn.addEventListener('click', function () {
    oligoStatus.innerText = 'dry';
    oligoNormalization.classList.add('d-none');
    checkConfirmOligoNormalization.classList.add('d-none');
    labelConfirmOligoNormalization.classList.add('d-none');
    btnBeginOligo.disabled = false;
})

oligoSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    let oName = oligoName.value.replace(/\s/g, '').toUpperCase(),
        oString = oligoString.value.replace(/\s/g, '').toUpperCase(),
        oNormalization = (oligoStatus.innerText == "wet") ? oligoNormalization.value : '0',
        oStatus = (oligoStatus.innerText == 'dry') ? yes : no;
    if (validateOligo(oName, oString) == `` || validateOligo(oName, oString) == `<li>${difficultOligo}</li>`) {
        productArr.push(createRow(oName, oString, oStatus, oNormalization));
        oligoList.innerHTML = displayOligo(productArr);

        if (oligoType.innerText == 'OligoScreeningPlate' || oligoType.innerText == 'GenomicsOligoPlate') {
            confirmOligo.classList.remove('d-none');
        }
        resetForm();
    }
})

oligoListBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let arr = oligoListInput.value.split(/\r?\n/);
    for (let i = 0; i < arr.length; i++) {
        let oligo = arr[i].split('\t');
        if (oligo[0] != '' && oligo[1] != '') {
            let oName = oligo[0].replace(/\s/g, '').toUpperCase(),
                oString = oligo[1].replace(/\s/g, '').toUpperCase(),
                oNormalization = (oligoStatus.innerText == "wet") ? oligoNormalization.value : '0',
                oStatus = (oligoStatus.innerText == 'dry') ? yes : no;
            console.log(i, oName, validateOligo(oName, oString));
            if (validateOligo(oName, oString) == '' || validateOligo(oName, oString) == '<li>' + difficultOligo + '</li>') {
                productArr.push(createRow(oName, oString, oStatus, oNormalization));
            }
        }
    }
    if (productArr.length) {
        oligoList.innerHTML = displayOligo(productArr);

        if (oligoType.innerText == 'OligoScreeningPlate' || oligoType.innerText == 'GenomicsOligoPlate') {
            confirmOligo.classList.remove('d-none');
        }
        resetForm();
    }
})

oligoExcelBtn.addEventListener('click', function (e) {
    e.preventDefault();
    excelProcess.classList.remove('d-none');
    excelProcess.innerText = 'Đang xử lý';
    if(oligoExcelInput.files.length) { do_file(oligoExcelInput.files); }
    else { oligoExcelInput.click(); }
}, false);

oligoName.addEventListener('change', function () {
    let oName = oligoName.value.replace(/\s/g, '').toUpperCase(),
        oString = oligoString.value.replace(/\s/g, '').toUpperCase();
    oligoName.value = oName;
    validateForm.innerHTML = validateOligo(oName, oString);
})

oligoString.addEventListener('keyup', function () {
    let oName = oligoName.value.replace(/\s/g, '').toUpperCase(),
        oString = oligoString.value.replace(/\s/g, '').toUpperCase();
    oligoString.value = oString;
    oligoString.focus();
    validateForm.innerHTML = validateOligo(oName, oString);
})

oligoString.addEventListener('keyup', function () {
    if (oligoString.value.replace(/\s/g, '').toUpperCase().length > stringLength[stringLength.length - 1] - 5) {
        stringCounter.classList.remove('d-none');
        stringCounter.innerText = oligoString.value.replace(/\s/g, '').toUpperCase().length;
    } else {
        stringCounter.classList.add('d-none');
    }
})

oligoEdit.addEventListener('click', function (e) {
    e.preventDefault();
    let oName = oligoName.value.replace(/\s/g, '').toUpperCase(),
        oString = oligoString.value.replace(/\s/g, '').toUpperCase(),
        oNormalization = (oligoStatus.innerText == "wet") ? oligoNormalization.value : '0',
        oStatus = (oligoStatus.innerText == 'dry') ? yes : no;
    for (let i = 0; i < productArr.length; i++) {
        if (productArr[i][0] == oligoName.value) {
            if (validateInputArray(oligoString.value.replace(/\s/g, ''), baseList) == '') {
                productArr[i] = createRow(oName, oString, oStatus, oNormalization);
                oligoList.innerHTML = displayOligo(productArr);
                resetForm();
            }
        }
    }
})

confirmOligo.addEventListener('click', function (e) {
    e.preventDefault();
    let checkOligo = true;
    for (let i = 0; i < productArr.length; i++) {
        if (validateOligo(productArr[i][0], productArr[i][1]) == '' || validateOligo(productArr[i][0], productArr[i][1]) == '<li>' + existName + '</li>' || validateOligo(productArr[i][0], productArr[i][1]) == '<li>' + difficultOligo + '</li>') {
            checkOligo = true;
        } else {
            checkOligo = false;
            alert('Một số nội dung chưa chính xác! Xin kiểm tra lại');
            break;
        }
    }
    if (checkOligo) {
        if (oligoType.innerText == 'OligoScreeningPlate' || oligoType.innerText == 'GenomicsOligoPlate') {
            oligoArrange.innerHTML = arrangePlate(productArr, true);
            cardOligoArrange.classList.remove('d-none');
            cardOligoInput.classList.add('d-none');
            confirmOligo.classList.add('d-none');
            addToCartOligo.classList.remove('d-none');
        }
        else {
            addToCartOligo.classList.remove('d-none');
            cardOligoInput.classList.add('d-none');
            confirmOligo.classList.add('d-none');
        }
    }
})

btnHorizon.addEventListener('click', function () {
    oligoArrange.innerHTML = arrangePlate(productArr, true);
    addToCartOligo.disabled = false;
})

btnVertical.addEventListener('click', function () {
    oligoArrange.innerHTML = arrangePlate(productArr, false);
    addToCartOligo.disabled = false;
})

/*---------------------------------
Hàm thêm option Normalization cho select
-----------------------------------*/
function addOption(arrayNormalization) {
    let optionNormalization = document.querySelector('.option-normalization');
    if (optionNormalization == null) {
        for (let i = 0; i < arrayNormalization.length; i++) {
            let option = document.createElement('option');
            option.innerHTML = arrayNormalization[i] + ' pmol/µL';
            option.value = arrayNormalization[i];
            option.classList.add('option-normalization');
            oligoNormalization.appendChild(option);
        }
    }
}

/*---------------------------------
Hàm kiểm tra từng ký tự trong chuỗi nhập vào có trong danh sách cho sẵn không
-----------------------------------*/
function validateInputArray(input, list) {
    input = input.replace(/\s/g, '').toUpperCase(); //Viết hoa chuỗi input lên
    list = list.toUpperCase(); //Viết hoa chuỗi list lên
    let inputArr = input.split("");
    let listArr = list.split(",");
    let result;
    let vitri = [];
    for (let i = 0; i < inputArr.length; i++) {
        let check = false;
        for (let j = 0; j < listArr.length; j++) {
            if (inputArr[i] == listArr[j]) {
                check = true;
            }
        }
        if (check == false) {
            vitri.push(inputArr[i]);
        }
    }
    if (vitri.length > 0) {
        let text = invalidLetter + ': ';
        text += vitri.join(', ');
        result = text + '. ';
    } else {
        result = '';
    }
    return result;
}

/*---------------------------------
Xác minh xem tên và chuỗi Oligo đã nhập có hợp lệ không
-----------------------------------*/
function validateOligo(name, string) {
    let array = [], text = '';
    for (let i = 0; i < productArr.length; i++) {
        array.push(productArr[i][0]);
    }
    switch (true) {
        case name == "":
            oligoName.classList.add('border-danger');
            oligoSubmit.disabled = true;
            text += `<li>${noEmptyName}</li>`;
            break;
        case name == null:
            oligoName.classList.add('border-danger');
            oligoSubmit.disabled = true;
            text += `<li>${noEmptyName}</li>`;
            break;
        case array.includes(name):
            if (oligoName.disabled == false) {
                oligoName.classList.add('border-danger');
                oligoSubmit.disabled = true;
                text += `<li>${existName}</li>`;
            }
            break;
        case name.length < nameLength[0]:
            oligoName.classList.add('border-danger');
            oligoSubmit.disabled = true;
            text += `<li>${minNameLength}${nameLength[0]}${letter}</li>`;
        case name.length > nameLength[1]:
            oligoName.classList.add('border-danger');
            oligoSubmit.disabled = true;
            text += `<li>${maxnameLength}${nameLength[1]}${letter}</li>`;
            break;
        case string == "":
            oligoString.classList.add('border-danger');
            oligoSubmit.disabled = true;
            text += `<li>${noEmptyString}</li>`;
            break;
        case validateInputArray(string, baseList) != '':
            oligoString.classList.add('border-danger');
            oligoSubmit.disabled = true;
            text += `<li>${validateInputArray(string, baseList)}</li>`;
            break;
        case string.length < stringLength[0]:
            oligoString.classList.add('border-danger');
            oligoSubmit.disabled = true;
            text += `<li>${minStringLength}${stringLength[0]}${base}</li>`;
            break;
        case string.length > stringLength[stringLength.length - 1]:
            oligoString.classList.add('border-danger');
            oligoSubmit.disabled = true;
            text += `<li>${maxStringLength}${stringLength[stringLength.length - 1]}${base}</li>`;
            break;
        case string.includes('GGGGGG'):
            oligoString.classList.add('border-danger');
            oligoSubmit.disabled = false;
            text += `<li>${difficultOligo}</li>`;
            break;
        default:
            oligoName.classList.remove('border-danger');
            oligoString.classList.remove('border-danger');
            oligoSubmit.disabled = false;
            // highlighter.innerHTML = '';
            break;
    }
    return text;
}

/*---------------------------------
Đưa form nhập dữ liệu trở về trạng thái ban đầu
-----------------------------------*/
function resetForm() {
    oligoName.classList.remove('border-danger');
    oligoString.classList.remove('border-danger');
    oligoEdit.classList.add('d-none');
    oligoSubmit.classList.remove('d-none');
    validateForm.innerHTML = "";
    oligoName.value = '';
    oligoName.disabled = false;
    oligoString.value = '';
    oligoStatus.checked = false;
    oligoNormalization.value = 0;
    oligoName.focus();
    stringCounter.classList.add('d-none');
    oligoListInput.value = '';
    excelProcess.classList.add('d-none');
    titleSingle.innerText = oligoSingleTitle;
    navSingle.innerText = oligoSingleTabLabel;
}

/*---------------------------------
Tạo thêm một mảng con (hàng dữ liệu)
-----------------------------------*/
function createRow(name, sequence, dry, normalization) {
    let array = [];
    name = name.replace(/\s/g, '').toUpperCase();
    sequence = sequence.replace(/\s/g, '').toUpperCase();
    array.push(name, sequence, dry, normalization);
    return array;
}

/*---------------------------------
Hiển thị dữ liệu của 1 hàng (mảng con) lên form để tiến hành chỉnh sửa
-----------------------------------*/
function editRow(num) {
    oligoName.value = productArr[num][0];
    oligoName.disabled = true;
    oligoString.value = productArr[num][1];
    oligoStatus.checked = (productArr[num][2] == 1) ? true : false;
    oligoNormalization.value = productArr[num][3];
    oligoEdit.classList.remove('d-none');
    oligoSubmit.classList.add('d-none');
    navSingle.classList.add('active');
    navExcel.classList.remove('active');
    navList.classList.remove('active');
    tabSingle.classList.add('show');
    tabExcel.classList.remove('show');
    tabList.classList.remove('show');
    tabSingle.classList.add('active');
    tabExcel.classList.remove('active');
    tabList.classList.remove('active');
    titleSingle.innerText = oligoEditTitle;
    navSingle.innerText = oligoEditTabLabel;
}

/*---------------------------------
Xóa một mảng con (hàng dữ liệu)
-----------------------------------*/
function removeRow(value) {
    if (confirm('Xác nhận trước khi xóa?')) {
        productArr.splice(value, 1);
        oligoList.innerHTML = displayOligo(productArr);
    }
}

/*---------------------------------
Nhập vào số milisecond, hàm sẽ trả về ngày tháng định dạng dd/mm/yyyy
-----------------------------------*/
function dmYFormat(value) {
    var date = new Date(value),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
    return [day, mnth, date.getFullYear()].join("/");
}

/*---------------------------------
Hiển thị mảng lớn dữ liệu ra màn hình
-----------------------------------*/
function displayOligo(arr2ways) {
    if (arr2ways.length) {
        let str = `
        <table class="table table-striped table-hover table-sm align-middle">
            <thead>
                <tr>
                    <th scope="col" class="text-center">${colName}</th>
                    <th scope="col" style="max-width: 25rem;">${colSequence}</th>
                    <th scope="col" class="text-center">${colLength}</th>
                    <th scope="col" class="text-center">${colOD}</th>
                    <th scope="col" class="text-center">${colType}</th>
                    <th scope="col" class="text-center">${colStatus}</th>
                    <th scope="col" class="text-center">${colNormalization}</th>
                    <th scope="col" class="text-end">${colUnitPrice}</th>
                    <th scope="col" class="text-end">${colFee}</th>
                    <th scope="col" class="text-end">${colTotal}</th>
                    <th scope="col" class="text-center">${colEDD}</th>
                    <th scope="col">&nbsp;</th>
                </tr>
            </thead>
            <tbody>`,
            subTotal = 0;
        for (let i = 0; i < arr2ways.length; i++) {
            let od, type, unitPrice, eDD, fee = 0;
            const d = new Date();
            let time = d.getTime();
            switch (true) {
                case (!isNaN(stringLength[1]) && arr2ways[i][1].length >= stringLength[0] && arr2ways[i][1].length <= stringLength[1]):
                    od = odList[0];
                    type = typeList[0];
                    eDD = dmYFormat(new Date(3600000 * turnAroundTimeList[0] + time));
                    unitPrice = unitPriceList[0];
                    break;
                case (!isNaN(stringLength[2]) && arr2ways[i][1].length > stringLength[1] && arr2ways[i][1].length <= stringLength[2]):
                    od = odList[1];
                    type = typeList[1];
                    eDD = dmYFormat(new Date(3600000 * turnAroundTimeList[1] + time));
                    unitPrice = unitPriceList[1];
                    break;
                case (!isNaN(stringLength[3]) && arr2ways[i][1].length > stringLength[2] && arr2ways[i][1].length <= stringLength[3]):
                    od = odList[2];
                    type = typeList[2];
                    eDD = dmYFormat(new Date(3600000 * turnAroundTimeList[2] + time));
                    unitPrice = unitPriceList[2];
                    break;
                default:
                    break;
            }
            fee += (arr2ways[i][1].length <= 14) ? lowNu : 0;
            fee += (arr2ways[i][2] == yes) ? dryFee : 0;
            total = unitPrice * arr2ways[i][1].length + fee;
            subTotal += total;
            str += `<tr>
                        <td scope="col" class="text-center">${arr2ways[i][0]}</td>
                        <td scope="col" style="max-width: 25rem;">${arr2ways[i][1]}</td>
                        <td scope="col" class="text-center">${arr2ways[i][1].length}</td>
                        <td scope="col" class="text-center">${od}</td>
                        <td scope="col" class="text-center">${type}</td>
                        <td scope="col" class="text-center">${arr2ways[i][2]}</td>
                        <td scope="col" class="text-center">${arr2ways[i][3]}</td>
                        <td scope="col" class="text-end">${unitPrice.toLocaleString()}</td>
                        <td scope="col" class="text-end">${fee.toLocaleString()}</td>
                        <td scope="col" class="text-end">${total.toLocaleString()}</td>
                        <td scope="col" class="text-center">${eDD}</td>
                        <td scope="col class="text-center"">
                            <button class="btn btn-link" onclick="editRow(${i})"><i class="fa-solid fa-pencil"></i></button>
                            <button class="btn btn-link" onclick="removeRow(${i})"><i class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>`;
        }
        str += `</tbody>
            <tfoot>
                <tr>
                    <th colspan="9" class="text-end">${subTotalLabel}</th>
                    <th class="text-end">${subTotal.toLocaleString()}</th>
                    <th colspan="3"></th>
                </tr>
            </tfoot>
        </table>`;
        return str;
    } else {
        return `<p>${guideText} <span class="badge bg-primary text-light">${addBtnLabel}</span></p>`;
    }
}


function arrangePlate(arr2ways, direction) {
    let tableArrange = ``;
    if (direction) {
        for (let k = 0; k < arr2ways.length; k += 96) {
            tableArrange += `
            <table class="table table-borderless align-middle text-center">
              <thead>
                <tr>
                  <th style="width: 4%;"></th>`;
            for (let i = 1; i < 13; i++) {
                number = (i < 10) ? '0' + i : i;
                tableArrange += `<th style="width: 8%;">${number}</th>`;
            }
            tableArrange += `</tr>
              </thead>
              <tbody>`;
            for (let i = 0; i < 96; i += 12) {
                letter = String.fromCharCode(i / 12 + 1 + 64);
                tableArrange += `<tr>
                <th>${letter}</th>`;
                for (let j = 0; j < 12; j++) {
                    tableArrange += (i + j + k < arr2ways.length) ? `<td>${arr2ways[i + j + k][0]}</td>` : `<td></td>`;
                }
                tableArrange += `</tr>`;
            }
            tableArrange += `
            </tbody>
          </table>`;
        }
    } else {
        for (let k = 0; k < arr2ways.length; k += 96) {
            tableArrange += `
            <table class="table table-borderless align-middle text-center">
              <thead>
                <tr>
                  <th style="width: 4%;"></th>`;
            for (let i = 1; i < 13; i++) {
                number = (i < 10) ? '0' + i : i;
                tableArrange += `<th style="width: 8%;">${number}</th>`;
            }
            tableArrange += `</tr>
              </thead>
              <tbody>`;
            for (let i = 0; i < 96; i += 12) {
                letter = String.fromCharCode(i / 12 + 1 + 64);
                tableArrange += `<tr>
                <th>${letter}</th>`;
                for (let j = 0; j < 12; j++) {
                    tableArrange += ((i / 12 + k) + j * 8 < arr2ways.length) ? `<td>${arr2ways[(i / 12 + k) + j * 8][0]}</td>` : `<td></td>`;
                }
                tableArrange += `</tr>`;
            }
            tableArrange += `
            </tbody>
          </table>`;
        }
    }
    return tableArrange;
}
/*---------------------------------
Xử lý file excel
-----------------------------------*/
var global_wb;
function to_csv(workbook) {
    var result = [];
    workbook.SheetNames.forEach(function (sheetName) {
        var csv = XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName]);
        if (csv.length) {
            result.push(csv);
        }
    });
    return result;
};
var process_wb = (function () {
    return function process_wb(wb) {
        global_wb = wb;
        var output = to_csv(wb);
        try {
            for (let j = 0; j < output.length; j++) {
                let arr = output[j].split(/\r?\n/);
                for (let i = 0; i < arr.length; i++) {
                    let oligo = arr[i].split(',');
                    if (oligo[0] != '' && oligo[1] != '') {
                        let oName = oligo[0].replace(/\s/g, '').toUpperCase(),
                            oString = oligo[1].replace(/\s/g, '').toUpperCase(),
                            oNormalization = (oligoStatus.innerText == "wet") ? oligoNormalization.value : '0',
                            oStatus = (oligoStatus.innerText == 'dry') ? yes : no;
                        if (validateOligo(oName, oString) == '' || validateOligo(oName, oString) == '<li>' + difficultOligo + '</li>') {
                            productArr.push(createRow(oName, oString, oStatus, oNormalization));
                        }
                    }
                }
            }

            if (productArr.length) {
                oligoList.innerHTML = displayOligo(productArr);
                if (oligoType.innerText == 'OligoScreeningPlate' || oligoType.innerText == 'GenomicsOligoPlate') {
                    confirmOligo.classList.remove('d-none');
                }
                resetForm();
            }
        } catch (e) {
            window.onbeforeunload = function () {
                return confirm("Đã có lỗi xảy ra! Hãy kiểm tra file Excel và thử lại.");
            };
        }
    };
})();

var do_file = (function () {
    var use_worker = true,
        use_utf8 = true;

    var xw = function xw(data, cb) {
        var worker = new Worker('./js/sheetjs/xlsxworker.js');
        worker.onmessage = function (e) {
            switch (e.data.t) {
                case 'ready': break;
                case 'e': console.error(e.data.d); break;
                case 'xlsx': cb(JSON.parse(e.data.d)); break;
            }
        };
        worker.postMessage({ d: data, b: 'array', c: use_utf8 ? 65001 : void 0 });
    };

    return function do_file(files) {
        var f = files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var data = new Uint8Array(e.target.result);
            if (use_worker) xw(data, process_wb);
            else process_wb(XLSX.read(data, { type: 'array', codepage: use_utf8 ? 65001 : void 0 }));
        };
        reader.readAsArrayBuffer(f);
    };
})();

(function () {
    var dropZone = document.getElementById('drop-zone');
    if (!dropZone.addEventListener && !window.addEventListener) return;

    function handleDrop(e) {
        dropZoneDisplay(e, false);
        do_file(e.dataTransfer.files);
    }

    function handleDragover(e) {
        e.stopPropagation();
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    }

    function dropZoneDisplay(e, show) {
        e.stopPropagation();
        e.preventDefault();

        var opacity = show ? '1' : '0';
        var zIndex = show ? '1' : '-1';

        dropZone.style.opacity = opacity;
        dropZone.style.zIndex = zIndex;
    }

    window.addEventListener('drop', handleDrop);
    window.addEventListener('dragover', handleDragover);
    window.addEventListener('dragenter', function (e) {
        dropZoneDisplay(e, true);
    });

    dropZone.addEventListener('dragleave', function (e) {
        dropZoneDisplay(e, false);
    });
})();

(function () {
    if (!oligoExcelInput.addEventListener) return;
    oligoExcelInput.addEventListener('change', function (e) {
        excelProcess.classList.remove('d-none');
        excelProcess.innerText = 'Đang xử lý';
        do_file(e.target.files);
    }, false);
})();