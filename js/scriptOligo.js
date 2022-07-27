var dryFee = 30000, lowNu = 25000, plateFee = 50000, wellFee = 240000, arrangeFee = 50000, normalizationFee = 2000, packageFee = 20000, minOrderValue = 500000,
    btnDatHang = document.querySelector('.btn-dat-hang'),
    oligoTitleText = document.querySelector('.oligo-title'),
    noCustomLabel = document.querySelector('.no-custom'),
    oligoName = document.getElementById('oligo-name'),
    oligoString = document.getElementById('oligo-string'),
    oligoList = document.getElementById('oligo-list'),
    oligoSubmit = document.getElementById('oligo-submit'),
    oligoEdit = document.getElementById('oligo-edit'),
    stringCounter = document.getElementById('string-counter'),
    addToCartOligo = document.querySelector('.add-to-cart-oligo'),
    navSingle = document.querySelector('.nav-single'),
    tabSingle = document.getElementById('tab_single'),
    titleSingle = document.querySelector('.title-single'),
    validateSingle = document.getElementById('validate-single'),
    fiveModified = document.getElementById('five-modified'),
    threeModified = document.getElementById('three-modified'),
    probeOligo = document.getElementById('probe-oligo'),
    oligoType = document.getElementById('oligo-type'),
    productSku = document.getElementById('product-sku'),

    titleList = document.querySelector('.title-list'),
    oligoListBtn = document.getElementById('oligo-list-btn'),
    oligoListInput = document.getElementById('oligo-list-input'),
    navList = document.querySelector('.nav-list'),
    tabList = document.getElementById('tab_list'),
    validateList = document.getElementById('validate-list'),

    titleExcel = document.querySelector('.title-excel'),
    oligoExcelBtn = document.getElementById('oligo-excel-btn'),
    oligoExcelInput = document.getElementById('oligo-excel-input'),
    navExcel = document.querySelector('.nav-excel'),
    tabExcel = document.getElementById('tab_excel'),
    excelProcess = document.querySelector('.excel-process'),
    excelDragDrop = document.querySelector('.drag-drop-placeholder'),
    validateExcel = document.getElementById('validate-excel'),

    wetBtn = document.querySelector('.btn-wet'),
    dryBtn = document.querySelector('.btn-dry'),
    oligoStatus = document.getElementById('oligo-status'),
    btnBeginOligo = document.querySelector('.btn-begin'),
    cardOligoSelect = document.querySelector('.card-oligo-select'),
    cardOligoInput = document.querySelector('.card-oligo-input'),
    cardOligoShow = document.querySelector('.card-oligo-show'),
    btnArrangeGroup = document.querySelector('.btn-arrange-group'),

    oligoArrange = document.getElementById('oligo-arrange'),
    plateLabel = document.querySelector('.plate-label'),
    plateLabelLabel = document.querySelector('.plate-label-label'),
    wellLabel = document.querySelector('.well-label'),
    plateHint = document.querySelector('.plate-hint'),
    confirmOligo = document.querySelector('.confirm-oligo'),
    btnHorizon = document.querySelector('.btn-horizon'),
    btnVertical = document.querySelector('.btn-vertical'),

    oligoSummary = document.getElementById('oligo-summary'),
    quantityOligo = document.getElementById('product-oligo-quantity'),
    priceOligo = document.getElementById('product-oligo-price');

oligoTitleText.innerText = oligoTitle;
oligoName.placeholder = colName;
oligoString.placeholder = colSequence;
btnBeginOligo.innerHTML = beginOligoLabel;
wetBtn.innerHTML = wet;
dryBtn.innerHTML = dry;
oligoSubmit.innerHTML = addBtnLabel;
oligoEdit.innerHTML = editBtnLabel;
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
plateHint.innerText = plateHintText;

addToCartOligo.innerText = addToCartLabel;
var productArr = [];
var productOption = [true, false, [], [], 0];
oligoList.innerHTML = displayOligo(productArr);

btnDatHang.addEventListener('click', function () {
    switch (oligoType.value) {
        case 'PremiumOligo':
            baseList = ['A', 'T', 'C', 'G', 'Y', 'R', 'W', 'S', 'K', 'M', 'D', 'V', 'H', 'B', 'X', 'N'];
            nameLength = [3, 15];
            stringLength = [6, 15, 36, 75];
            odList = ['1.5+', '3+', '3+'];
            typeList = ['PremiumOligo.00', 'PremiumOligo.01', 'PremiumOligo.02'];
            normalizationList = [100, 100, 50];
            turnAroundTimeList = [48, 48, 72];
            unitPriceList = [4900, 4900, 5700];
            break;

        case 'LongOligo':
            baseList = ['A', 'T', 'C', 'G', 'Y', 'R', 'W', 'S', 'K', 'M', 'D', 'V', 'H', 'B', 'X', 'N'];
            nameLength = [3, 15];
            stringLength = [76, 121, 135];
            odList = ['5+', '5+'];
            typeList = ['LongOligo.01', 'LongOligo.02'];
            normalizationList = [0, 0];
            turnAroundTimeList = [96, 96];
            unitPriceList = [8200, 9600];
            break;

        case 'HIODOligo':
            baseList = ['A', 'T', 'C', 'G', 'Y', 'R', 'W', 'S', 'K', 'M', 'D', 'V', 'H', 'B', 'X', 'N'];
            nameLength = [3, 15];
            stringLength = [15, 31, 70];
            odList = ['30', '30'];
            typeList = ['HiOD Oligo.01.30', 'HiOD Oligo.02.30'];
            normalizationList = [0, 0];
            turnAroundTimeList = [48, 72];
            unitPriceList = [18000, 21800];
            break;

        case 'GenomicOligo':
            baseList = ['A', 'T', 'C', 'G', 'Y', 'R', 'W', 'S', 'K', 'M', 'D', 'V', 'H', 'B', 'X', 'N'];
            nameLength = [3, 15];
            stringLength = [6, 15, 36, 51, 80];
            odList = ['1+', '1.5+', '1.5+', '1.5+'];
            typeList = ['GenomicOligoGA.00', 'GenomicOligoGA.01', 'GenomicOligoGA.02', 'GenomicOligoGA.03'];
            normalizationList = [0, 0, 0, 0];
            turnAroundTimeList = [48, 48, 72, 72];
            unitPriceList = [5400, 5400, 6000, 6200];
            break;
        case 'OligoScreeningPlate':
            baseList = ['A', 'T', 'C', 'G', 'Y', 'R', 'W', 'S', 'K', 'M', 'D', 'V', 'H', 'B', 'X', 'N'];
            nameLength = [3, 15];
            stringLength = [15, 36, 75];
            odList = ['0.5+', '0.5+'];
            typeList = ['OSP.01.02', 'OSP.02.02'];
            normalizationList = [0, 0];
            turnAroundTimeList = [48, 72];
            unitPriceList = [2800, 3200];
            break;

        case 'OligoGenomicPlate':
            baseList = ['A', 'T', 'C', 'G', 'Y', 'R', 'W', 'S', 'K', 'M', 'D', 'V', 'H', 'B', 'X', 'N'];
            nameLength = [3, 15];
            stringLength = [15, 36, 75];
            odList = ['0.5+', '0.5+'];
            typeList = ['GSPGA.01.02', 'GSPGA.02.02'];
            normalizationList = [0, 0];
            turnAroundTimeList = [48, 72];
            unitPriceList = [3300, 3800];
            break;

        case 'Endo-ExoModification':
            baseList = ['A', 'T', 'C', 'G', 'Y', 'R', 'W', 'S', 'K', 'M', 'D', 'V', 'H', 'B', 'X', 'N', 'I', 'O', 'U'];
            nameLength = [3, 15];
            stringLength = [6, 36, 50];
            odList = ['5', '5'];
            typeList = ['Modi.premium.01', 'Modi.premium.02'];
            normalizationList = [0, 0];
            turnAroundTimeList = [168, 168];
            unitPriceList = [4900, 5700];
            modifiedBaseList = ['I', 'O', 'U'];
            modifiedFeeList = [190000, 240000, 190000];
            modified5ValueList = [
                'Thiol-C6-S-S',
                'Biotin',
                'C6-Spacer',
                'C3-Spacer',
                'NH2-C6',
                'NH2-C12',
                'PO4-Phosphat'
            ];
            modified5NameList = [
                'Thiol C6 S-S 200 nmol',
                'Biotin 200 nmol',
                'C6-Spacer 200 nmol',
                'C3-Spacer 200 nmol',
                'NH2 C6 200 nmol',
                'NH2 C12 200 nmol',
                'Phosphorylation 200 nmol'
            ];
            modified5FeeList = [
                2400000,
                1170000,
                820000,
                820000,
                584000,
                1050000,
                584000
            ];
            modified3ValueList = [
                'C6-Spacer',
                'C3-Spacer',
                'Thiol-C6-S-S',
                'PO4-Phosphat',
                'Biotin',
                'Biotin-TEG',
                'NH2-C6',
                'NH2-C12'
            ];
            modified3NameList = [
                'C6-Spacer 200 nmol',
                'C3-Spacer 200 nmol',
                'Thiol C6 S-S 200 nmol',
                'Phosphorylation 200 nmol',
                'Biotin 200 nmol',
                'Biotin-TEG 200 nmol',
                'NH2 C6 200nmol',
                'NH2 C12 200 nmol'
            ];
            modified3FeeList = [
                820000,
                820000,
                2340000,
                584000,
                700000,
                1634000,
                584000,
                1050000];
            break;
        case 'Probe':
            baseList = ['A', 'T', 'C', 'G', 'Y', 'R', 'W', 'S', 'K', 'M', 'D', 'V', 'H', 'B', 'X', 'N'];
            nameLength = [3, 15];
            stringLength = [6, 36, 50];
            odList = ['5', '5'];
            typeList = ['Probe.Premium 01', 'Probe.Premium 02'];
            normalizationList = [0, 0];
            turnAroundTimeList = [576, 576];
            unitPriceList = [4900, 5700];
            probeValueList = [
                '5\'FAM-3\'TAMRA',
                '5\'HEX-3\'TAMRA',
                '5\'TET-3\'TAMRA',
                '5\'JOE-3\'TAMRA',
                '5\'FAM-3\'BHQ1',
                '5\'HEX-3\'BHQ1',
                '5\'TET-3\'BHQ1',
                '5\'JOE-3\'BHQ1',
                '5\'YakimaYellow-3\'BHQ1',
                '5\'Cal Fluor Orange 560-3\'BHQ1',
                '5\'Cal Fluor Gold 540-3\'BHQ1',
                '5\'TET-3\'BHQ2',
                '5\'Cy3-3\'BHQ2',
                '5\'Cy5-3\'BHQ2',
                '5\'TAMRA-3\'BHQ2',
                '5\'ROX-3\'BHQ2',
                '5\'Texas Red-3\'BHQ2',
                '5\'Cal Fluor Red 610-3\'BHQ2',
                '5\'Quasar 670-3\'BHQ2',
                '5\'Quasar 570-3\'BHQ2',
                '5\'Quasar 705-3\'BHQ2',
                '5\'Cal Flour Orange 560-3\'BHQ2',
                '5\'Cy5-3\'BHQ3',
                '5\'Quasar 670-3\'BHQ3',
                '5\'Quasar 705-3\'BHQ3'
            ];
            probeFeeList = [
                4000000,
                4000000,
                4000000,
                4200000,
                2800000,
                4000000,
                4200000,
                4200000,
                4200000,
                4200000,
                6185000,
                4200000,
                4200000,
                6185000,
                4200000,
                6185000,
                6185000,
                6185000,
                6185000,
                6185000,
                6185000,
                6185000,
                6185000,
                6185000,
                6185000
            ];
            break;
        default:
            break;
    }
    if (isProbe() || isModified()) {
        cardOligoInput.classList.remove('d-none');
        cardOligoShow.classList.remove('d-none');
        oligoStatus.innerText = 'dry';
        document.querySelector('.card-oligo-input ul>li:first-child').classList.add('d-none');
        document.querySelector('.card-oligo-input ul>li:last-child').classList.add('d-none');
        if (isModified()) {
            fiveModified.parentElement.classList.remove('d-none');
            addOption(fiveModified, modified5ValueList, modified5NameList);
            oligoString.parentElement.classList.remove('col-lg-8');
            oligoString.parentElement.classList.add('col-lg-4');
            threeModified.parentElement.classList.remove('d-none');
            addOption(threeModified, modified3ValueList, modified3NameList);
        } else if (isProbe()) {
            oligoString.parentElement.classList.remove('col-lg-8');
            oligoString.parentElement.classList.add('col-lg-6');
            probeOligo.parentElement.classList.remove('d-none');
            addOption(probeOligo, probeValueList, probeValueList);
        }
    } else if (isPlate()) {
        cardOligoInput.classList.remove('d-none');
        cardOligoShow.classList.remove('d-none');
        oligoStatus.innerText = 'wet';
    } else {
        cardOligoSelect.classList.remove('d-none');
    }
})

btnBeginOligo.addEventListener('click', function (e) {
    e.preventDefault();
    cardOligoSelect.classList.add('d-none');
    cardOligoInput.classList.remove('d-none');
    cardOligoShow.classList.remove('d-none');
})

wetBtn.addEventListener('click', function () {
    oligoStatus.innerText = 'wet';
    btnBeginOligo.disabled = false;
})

dryBtn.addEventListener('click', function () {
    oligoStatus.innerText = 'dry';
    btnBeginOligo.disabled = false;
})

oligoSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    if (validateOligo(oligoName.value, oligoString.value, null, fiveModified.value, threeModified.value, probeOligo.value) == `` || validateOligo(oligoName.value, oligoString.value, null, fiveModified.value, threeModified.value, probeOligo.value) == `<li>Line ${oligoName.value}: ${difficultOligo}</li>`) {
        productArr.push(createRow(oligoName.value, oligoString.value, (oligoStatus.innerText == 'dry') ? yes : no, fiveModified.value, threeModified.value, probeOligo.value));
        oligoList.innerHTML = displayOligo(productArr);
        confirmOligo.classList.remove('d-none');
        resetForm();
    }
})

oligoListBtn.addEventListener('click', function (e) {
    e.preventDefault();
    validateListOligo(oligoListInput.value);
    if (productArr.length) {
        oligoList.innerHTML = displayOligo(productArr);
        confirmOligo.classList.remove('d-none');
        resetForm();
    }
})

oligoExcelBtn.addEventListener('click', function (e) {
    e.preventDefault();
    excelProcess.classList.remove('d-none');
    excelProcess.innerText = processing;
    if (oligoExcelInput.files.length) { do_file(oligoExcelInput.files); }
    else { oligoExcelInput.click(); }
}, false);

tabSingle.addEventListener('change', function () {
    let num = (oligoName.disabled == true) ? 0 : null;
    validateSingle.innerHTML = validateOligo(oligoName.value, oligoString.value, num, fiveModified.value, threeModified.value, probeOligo.value);
})

oligoString.addEventListener('keyup', function () {
    let num = (oligoName.disabled == true) ? 0 : null;
    validateSingle.innerHTML = validateOligo(oligoName.value, oligoString.value, num, fiveModified.value, threeModified.value, probeOligo.value);

    //Bật bộ đếm ký tự nếu vượt quá số lượng cho phép
    if (oligoString.value.replace(/\s/g, '').length > stringLength[stringLength.length - 1]) {
        stringCounter.classList.remove('d-none');
        stringCounter.innerText = oligoString.value.replace(/\s/g, '').toUpperCase().length;
    } else {
        stringCounter.classList.add('d-none');
    }
})

confirmOligo.addEventListener('click', function (e) {
    var btnRemove = document.querySelectorAll('.btn-remove'),
        btnEdit = document.querySelectorAll('.btn-edit');
    e.preventDefault();
    let checkOligo = true;
    for (let i = 0; i < productArr.length; i++) {
        if (validateOligo(productArr[i][0], productArr[i][1], null, productArr[i][3], productArr[i][4], productArr[i][5]) == `` || validateOligo(productArr[i][0], productArr[i][1], null, productArr[i][3], productArr[i][4], productArr[i][5]) == `<li>${difficultOligo}</li>`) {
            checkOligo = true;
        } else {
            checkOligo = false;
            alert(generalErrText);
            break;
        }
    }
    if (checkOligo) {
        for (const btn of btnRemove) {
            btn.classList.add('d-none');
        }
        for (const btn of btnEdit) {
            btn.classList.add('d-none');
        }
        cardOligoInput.classList.add('d-none');
        confirmOligo.classList.add('d-none');
        oligoSummary.innerHTML = summaryOligo();
        if (isPlate()) {
            oligoArrange.innerHTML = arrangePlate(productArr);
            plateHint.classList.remove('d-none');
            addToCartOligo.disabled = true;
            btnArrangeGroup.classList.remove('d-none');
        }
        addToCartOligo.classList.remove('d-none');
    }
})

btnHorizon.addEventListener('click', function () {
    addToCartOligo.disabled = false;
    productOption[0] = true;
    oligoArrange.innerHTML = arrangePlate(clearEmpty());
    oligoSummary.innerHTML = summaryOligo();
})

btnVertical.addEventListener('click', function () {
    addToCartOligo.disabled = false;
    productOption[0] = false;
    oligoArrange.innerHTML = arrangePlate(clearEmpty());
    oligoSummary.innerHTML = summaryOligo();
})

/*---------------------------------
Hàm thêm option Normalization cho select
-----------------------------------*/
function addOption(select, valueArr, nameArr, unit = '') {
    if (select.length == 1) {
        for (let i = 0; i < valueArr.length; i++) {
            let option = document.createElement('option');
            option.innerHTML = nameArr[i] + unit;
            option.value = valueArr[i];
            select.appendChild(option);
        }
    }
}

/*---------------------------------
Hàm kiểm tra từng ký tự trong chuỗi nhập vào có trong danh sách cho sẵn không
-----------------------------------*/
function validateInputArray(input, list) {
    let inputArr = input.split("");
    let result;
    let vitri = [];
    for (let i = 0; i < inputArr.length; i++) {
        let check = false;
        for (let j = 0; j < list.length; j++) {
            if (inputArr[i] == list[j].toUpperCase()) {
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
Xác minh xem danh sách oligo đã nhập có hợp lệ không
-----------------------------------*/
function validateListOligo(listInput) {
    let arr = (listInput.includes('\n\"\t')) ? listInput.replace(/\n\"\t/g, '\t').replace(/,/g, '\t').split(/\r?\n/) : listInput.replace(/,/g, '\t').split(/\r?\n/);
    let textErr = ``;
    for (let i = 0; i < arr.length; i++) {
        let oligo = arr[i].split('\t');
        if (oligo.length > 1) {
            let oName = oligo[0].replace(/\s/g, '').replace(/\n/g, '').replace(/\"/g, ''),
                oString = oligo[1].replace(/\s/g, '').replace(/\n/g, '').replace(/\"/g, ''),
                oStatus = (oligoStatus.innerText == 'dry') ? yes : no;
            if (validateOligo(oName, oString) != '') {
                textErr += validateOligo(oName, oString);
            }
            if (validateOligo(oName, oString) == '' || validateOligo(oName, oString) == '<li>' + difficultOligo + '</li>') {
                productArr.push(createRow(oName, oString, oStatus));
            }
        } else if (oligo.length <= 1) {
            textErr += (oligo[0] != '') ? `<li>${generalErrText}</li>` : '';
        }
    }
    validateList.innerHTML += textErr;
}

/*---------------------------------
Xác minh xem tên và chuỗi Oligo đã nhập có hợp lệ không
-----------------------------------*/
function validateOligo(name, string, num = null, mod5 = ``, mod3 = ``, prb = ``) {
    let arrayName = [], arrayString = [], text = '';

    name = name.replace(/\s/g, '').toUpperCase();
    string = string.replace(/\s/g, '').toUpperCase();
    oligoName.value = name;
    oligoString.value = string;

    for (let i = 0; i < productArr.length; i++) {
        arrayName.push(productArr[i][0]);
        arrayString.push(productArr[i][0] + productArr[i][1] + productArr[i][3] + productArr[i][4] + productArr[i][5]);
    }

    if (name == ``) {
        oligoName.classList.add('border-danger');
        oligoSubmit.disabled = true;
        oligoEdit.disabled = true;
        text += `<li>${noEmptyName}</li>`;
    }
    if (name == null) {
        oligoName.classList.add('border-danger');
        oligoSubmit.disabled = true;
        oligoEdit.disabled = true;
        text += `<li>${noEmptyName}</li>`;
    }
    if (name.length < nameLength[0]) {
        oligoName.classList.add('border-danger');
        oligoSubmit.disabled = true;
        oligoEdit.disabled = true;
        text += `<li>Line ${name}: ${minNameLengthText + nameLength[0] + letter}</li>`;
    }
    if (name.length > nameLength[1]) {
        oligoName.classList.add('border-danger');
        oligoSubmit.disabled = true;
        oligoEdit.disabled = true;
        text += `<li>Line ${name}: ${maxNameLengthText + nameLength[1] + letter}</li>`;
    }
    if (string == "") {
        oligoString.classList.add('border-danger');
        oligoSubmit.disabled = true;
        oligoEdit.disabled = true;
        text += `<li>Line ${name}: ${noEmptyString}</li>`;
    }
    if (validateInputArray(string, baseList) != '') {
        oligoString.classList.add('border-danger');
        oligoSubmit.disabled = true;
        oligoEdit.disabled = true;
        text += `<li>Line ${name}: ${validateInputArray(string, baseList)}</li>`;
    }
    if (string.length < stringLength[0]) {
        oligoString.classList.add('border-danger');
        oligoSubmit.disabled = true;
        oligoEdit.disabled = true;
        text += `<li>Line ${name}: ${minStringLengthText + stringLength[0] + base}</li>`;
    }
    if (string.length > stringLength[stringLength.length - 1]) {
        oligoString.classList.add('border-danger');
        oligoSubmit.disabled = true;
        oligoEdit.disabled = true;
        text += `<li>Line ${name}: ${maxStringLengthText + stringLength[stringLength.length - 1] + base}</li>`;
    }
    if (string.includes('GGGGGG')) {
        oligoString.classList.add('border-danger');
        text += `<li>Line ${name}: ${difficultOligo}</li>`;
    }
    if (num == null && arrayName.includes(name) && !arrayString.includes(name + string + mod5 + mod3 + prb)) {
        oligoName.classList.add('border-danger');
        oligoString.classList.add('border-danger');
        oligoSubmit.disabled = true;
        oligoEdit.disabled = true;
        text += `<li>Line ${name}: ${existName}</li>`;
    }
    if (isModified() && mod5 == '' && mod3 == '') {
        fiveModified.classList.add('border-danger');
        threeModified.classList.add('border-danger');
        text += `<li>Line ${name}: ${noEmptyModified}</li>`;
        oligoSubmit.disabled = true;
        oligoEdit.disabled = true;
    }
    if (isProbe() && prb == '') {
        probeOligo.classList.add('border-danger');
        text += `<li>Line ${name}: ${noEmptyProbe}</li>`;
        oligoSubmit.disabled = true;
        oligoEdit.disabled = true;
    }
    if (text == `` || text == `<li>Line ${name}: ${difficultOligo}</li>`) {
        oligoName.classList.remove('border-danger');
        oligoString.classList.remove('border-danger');
        fiveModified.classList.remove('border-danger');
        threeModified.classList.remove('border-danger');
        probeOligo.classList.remove('border-danger');
        oligoSubmit.disabled = false;
        oligoEdit.disabled = false;
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
    validateSingle.innerHTML = "";
    oligoName.value = '';
    oligoName.disabled = false;
    oligoString.value = '';
    oligoName.focus();
    stringCounter.classList.add('d-none');
    oligoListInput.value = '';
    excelProcess.classList.add('d-none');
    titleSingle.innerText = oligoSingleTitle;
    navSingle.innerText = oligoSingleTabLabel;
    fiveModified.value = '';
    threeModified.value = '';
}

/*---------------------------------
Tạo thêm một mảng con (hàng dữ liệu)
-----------------------------------*/
function createRow(name, sequence, dry, modified5 = '', modified3 = '', prb = '') {
    let array = [];
    name = name.replace(/\s/g, '').toUpperCase();
    sequence = sequence.replace(/\s/g, '').toUpperCase();
    array.push(name, sequence, dry, modified5, modified3, prb);
    return array;
}

/*---------------------------------
Hiển thị dữ liệu của 1 hàng (mảng con) lên form để tiến hành chỉnh sửa
-----------------------------------*/
function editRow(num) {
    oligoName.value = productArr[num][0];
    oligoName.disabled = true;
    oligoString.value = productArr[num][1];
    if (isModified()) {
        fiveModified.value = productArr[num][3];
        threeModified.value = productArr[num][4];
    } else if (isProbe()) {
        probeOligo.value = productArr[num][5];
    }
    oligoStatus.innerText = (productArr[num][2] == yes) ? `dry` : `wet`;
    oligoEdit.classList.remove('d-none');
    oligoEdit.setAttribute("onclick", `updateRow(event)`);
    oligoSubmit.classList.add('d-none');
    navSingle.classList.add('active');
    navExcel.classList.remove('active');
    navList.classList.remove('active');
    tabSingle.classList.add('active');
    tabExcel.classList.remove('active');
    tabList.classList.remove('active');
    titleSingle.innerText = oligoEditTitle;
    navSingle.innerText = oligoEditTabLabel;
    oligoString.focus();
}

/*---------------------------------
Cập nhật dữ liệu đã sửa vào lại bảng
-----------------------------------*/
function updateRow(e) {
    e.preventDefault();
    if (validateOligo(oligoName.value, oligoString.value, 0, fiveModified.value, threeModified.value, probeOligo.value) == `` || validateOligo(oligoName.value, oligoString.value, 0, fiveModified.value, threeModified.value, probeOligo.value) == `<li>Line ${oligoName.value}: ${difficultOligo}</li>`) {
        for (let i = 0; i < productArr.length; i++) {
            if (productArr[i][0] == oligoName.value) {
                productArr[i] = createRow(oligoName.value, oligoString.value, (oligoStatus.innerText == 'dry') ? yes : no, fiveModified.value, threeModified.value, probeOligo.value);
            }
        }
        oligoList.innerHTML = displayOligo(productArr);
        resetForm();
    }
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
Kiểm tra coi có phải plate không
-----------------------------------*/
function isPlate() {
    return (oligoType.value == 'OligoScreeningPlate' || oligoType.value == 'OligoGenomicPlate') ? true : false;
}

/*---------------------------------
Kiểm tra coi có phải modified không
-----------------------------------*/
function isModified() {
    return (oligoType.value == 'Endo-ExoModification') ? true : false;
}

/*---------------------------------
Kiểm tra coi có phải modified không
-----------------------------------*/
function isProbe() {
    return (oligoType.value == 'Probe') ? true : false;
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
Hàm thêm ô rỗng
-----------------------------------*/
function emptyCell(action, value) {
    if (action == 'add') {
        productArr.splice(value, 0, '');
    } else {
        productArr.splice(value, 1);
    }
    oligoArrange.innerHTML = arrangePlate(productArr);
    oligoSummary.innerHTML = summaryOligo();
}

/*---------------------------------
Hàm thêm hàng rỗng
-----------------------------------*/
function emptyRow(value) {
    if (productOption[0]) {
        for (let i = 0; i < 12; i++) {
            if (value < productArr.length) {
                productArr.splice(value, 0, '');
                oligoArrange.innerHTML = arrangePlate(productArr);
                oligoSummary.innerHTML = summaryOligo();
            } else {
                break;
            }
        }
    } else {
        for (let i = 0; i < 96; i += 8) {
            if (value + i < productArr.length) {
                productArr.splice(value + i, 0, '');
                oligoArrange.innerHTML = arrangePlate(productArr);
                oligoSummary.innerHTML = summaryOligo();
            } else {
                break;
            }
        }
    }
}
/*---------------------------------
Hàm thêm cột rỗng
-----------------------------------*/
function emptyCol(value) {
    if (productOption[0]) {
        for (let i = 0; i < 96; i += 12) {
            if (value + i < productArr.length) {
                productArr.splice(value + i, 0, '');
                oligoArrange.innerHTML = arrangePlate(productArr);
                oligoSummary.innerHTML = summaryOligo();
            } else {
                break;
            }
        }
    } else {
        for (let i = 0; i < 8; i++) {
            if (value * 8 < productArr.length) {
                productArr.splice(value * 8 + i, 0, '');
                oligoArrange.innerHTML = arrangePlate(productArr);
                oligoSummary.innerHTML = summaryOligo();
            } else {
                break;
            }
        }
    }
}

/*---------------------------------
Hàm xoá tất cả ô rỗng trong mảng
-----------------------------------*/
function clearEmpty() {
    return productArr = productArr.filter(function (el) {
        return el != '';
    });
}

/*---------------------------------
Hàm thay đổi tùy chọn cho plate
-----------------------------------*/
function updateOption(obj) {
    let plateLabel = document.querySelectorAll('.plate-label'),
        wellLabelInput = document.querySelectorAll('.well-label-input');
    if (obj.getAttribute('type') != 'checkbox') {
        delete productOption[2];
        let array = [];
        for (const label of plateLabel) {
            array.push(label.value);
        }
        productOption[2] = array;
    } else {
        delete productOption[3];
        let array = [];
        for (const check of wellLabelInput) {
            array.push(check.checked);
        }
        productOption[3] = array;
    }

    oligoArrange.innerHTML = arrangePlate(productArr);
    oligoSummary.innerHTML = summaryOligo();
    // console.log(productOption);
}


/*---------------------------------
Hiển thị mảng lớn dữ liệu ra màn hình
-----------------------------------*/
function displayOligo(arr2ways, editable = true) {
    if (arr2ways.length) {
        let subTotal = 0,
            str = `
        <table class="table table-striped table-hover table-sm align-middle">
            <thead>
                <tr>
                    <th scope="col" class="text-center">&#8470;</th>
                    <th scope="col" class="text-center">${colName}</th>`;
        str += (isModified()) ? `<th scope="col" class="text-center">5\' modified</th>` : ``;
        str += `    <th scope="col" style="max-width: 25rem;">${colSequence}</th>`;
        str += (isModified()) ? `<th scope="col" class="text-center">3' modified</th>` : ``;
        str += (isProbe()) ? `<th scope="col" class="text-center">Probe</th>` : ``;
        str += `    <th scope="col" class="text-center">${colLength}</th>
                    <th scope="col" class="text-center">${colOD}</th>
                    <th scope="col" class="text-center">${colType}</th>`;
        str += (isModified() || isProbe()) ? `` : `<th scope="col" class="text-center">${colStatus}</th>`;
        str += (isModified() || isProbe()) ? `` : `<th scope="col" class="text-center">${colNormalization}</th>`;
        str += `    <th scope="col" class="text-end">${colUnitPrice}</th>
                    <th scope="col" class="text-end">${colFee}</th>
                    <th scope="col" class="text-end">${colTotal}</th>`;
        str += (arr2ways[0][6] == undefined && arr2ways[arr2ways.length-1][6] == undefined) ? `` : `<th scope="col" class="text-end">${platePlace}</th>`;
        str += `    <!--th scope="col" class="text-center">${colEDD}<th-->`;
        str += (editable) ? `<th scope="col">&nbsp;</th>` : ``;
        str += `    </tr>
            </thead>
            <tbody>`;
        for (let i = 0; i < arr2ways.length; i++) {
            if (arr2ways[i] != ``) {
                let od, type, normalization, unitPrice, eDD, fee = 0;
                const d = new Date();
                let time = d.getTime();
                switch (true) {
                    case (!isNaN(stringLength[1]) && arr2ways[i][1].length >= stringLength[0] && arr2ways[i][1].length <= stringLength[1]):
                        od = odList[0];
                        type = typeList[0];
                        normalization = (arr2ways[i][2] == yes) ? 0 : normalizationList[0];
                        eDD = dmYFormat(new Date(3600000 * turnAroundTimeList[0] + time));
                        unitPrice = unitPriceList[0];
                        break;
                    case (!isNaN(stringLength[2]) && arr2ways[i][1].length > stringLength[1] && arr2ways[i][1].length <= stringLength[2]):
                        od = odList[1];
                        type = typeList[1];
                        normalization = (arr2ways[i][2] == yes) ? 0 : normalizationList[1];
                        eDD = dmYFormat(new Date(3600000 * turnAroundTimeList[1] + time));
                        unitPrice = unitPriceList[1];
                        break;
                    case (!isNaN(stringLength[3]) && arr2ways[i][1].length > stringLength[2] && arr2ways[i][1].length <= stringLength[3]):
                        od = odList[2];
                        type = typeList[2];
                        normalization = (arr2ways[i][2] == yes) ? 0 : normalizationList[2];
                        eDD = dmYFormat(new Date(3600000 * turnAroundTimeList[2] + time));
                        unitPrice = unitPriceList[2];
                        break;
                    case (!isNaN(stringLength[4]) && arr2ways[i][1].length > stringLength[3] && arr2ways[i][1].length <= stringLength[4]):
                        od = odList[3];
                        type = typeList[3];
                        normalization = (arr2ways[i][2] == yes) ? 0 : normalizationList[3];
                        eDD = dmYFormat(new Date(3600000 * turnAroundTimeList[3] + time));
                        unitPrice = unitPriceList[3];
                        break;
                    case (!isNaN(stringLength[5]) && arr2ways[i][1].length > stringLength[4] && arr2ways[i][1].length <= stringLength[5]):
                        od = odList[4];
                        type = typeList[4];
                        normalization = (arr2ways[i][2] == yes) ? 0 : normalizationList[4];
                        eDD = dmYFormat(new Date(3600000 * turnAroundTimeList[4] + time));
                        unitPrice = unitPriceList[4];
                        break;
                    default:
                        break;
                }
                // console.log(arr2ways[i][1].length, arr2ways[i][0], unitPrice);
                fee += (arr2ways[i][1].length < 14) ? lowNu : 0;
                fee += (arr2ways[i][2] == yes) ? dryFee : 0;
                fee += (normalization > 0) ? normalizationFee : 0;
                if (isModified()) {
                    fee += (arr2ways[i][3] != '') ? parseInt(modified5FeeList[modified5ValueList.indexOf(arr2ways[i][3])]) : 0;
                    fee += (arr2ways[i][4] != '') ? parseInt(modified3FeeList[modified3ValueList.indexOf(arr2ways[i][4])]) : 0;
                    for (let j = 0; j < modifiedBaseList.length; j++) {
                        fee += (arr2ways[i][1].includes(modifiedBaseList[j])) ? (arr2ways[i][1].match(new RegExp(modifiedBaseList[j], "g")) || []).length * parseInt(modifiedFeeList[j]) : 0;
                    }
                } else if (isProbe()) {
                    fee += (arr2ways[i][5] != '') ? parseInt(probeFeeList[probeValueList.indexOf(arr2ways[i][5])]) : 0;
                }
                total = unitPrice * arr2ways[i][1].length + fee;
                subTotal += total;
                str += `<tr>
                        <td scope="col" class="text-center">${i + 1}</td>
                        <td scope="col" class="text-center">${arr2ways[i][0]}</td>`;
                str += (isModified()) ? `<td scope="col" class="text-center">${arr2ways[i][3]}</td>` : ``;
                str += `    <td scope="col" style="max-width: 25rem;">${arr2ways[i][1]}</td>`;
                str += (isModified()) ? `<td scope="col" class="text-center">${arr2ways[i][4]}</td>` : ``;
                str += (isProbe()) ? `<td scope="col" class="text-center">${arr2ways[i][5]}</td>` : ``;
                str += `<td scope="col" class="text-center lownu-trigger">${arr2ways[i][1].length}</td>
                        <td scope="col" class="text-center">${od}</td>
                        <td scope="col" class="text-center">${type}</td>`;
                str += (isModified() || isProbe()) ? `` : `<td scope="col" class="text-center status-trigger">${arr2ways[i][2]}</td>`;
                str += (isModified() || isProbe()) ? `` : `<td scope="col" class="text-center normalization-trigger">${normalization}</td>`;
                str += `    <td scope = "col" class="text-end" > ${unitPrice.toLocaleString()}</td>
                        <td scope="col" class="text-end">${fee.toLocaleString()}</td>
                        <td scope="col" class="text-end">${total.toLocaleString()}</td>`;
                str += (arr2ways[i][6] == undefined) ? `` : `<td scope="col" class="text-end">${arr2ways[i][6]}</td>`;
                str += `    <!--td scope="col" class="text-center">${eDD}<td-->`;
                str += (editable) ? `
                <td scope="col" class="text-center">
                    <button class="btn btn-link btn-edit" onclick="editRow(${i})"><i class="fa-solid fa-pencil"></i></button>
                    <button class="btn btn-link btn-remove" onclick="removeRow(${i})"><i class="fa-solid fa-trash"></i></button>
                </td>` : ``;
                str += `    </tr > `;
            }
        }
        str += `</tbody>
                <tfoot>
                    <tr>
                        <th colspan="9" class="text-end">${subTotalLabel}</th>
                        <th class="text-end">${subTotal.toLocaleString()}</th>
                        <th colspan="3"></th>
                    </tr>
                </tfoot>
        </table > 
        <div id="product-oligo-subtotal" class="d-none">${subTotal}</div>`;
        window.onbeforeunload = function (e) {
            return 'Bạn có chắc chắn không?';
        };
        return str;
    } else {
        return `<p> ${guideText} <span class="badge bg-primary text-light">${addBtnLabel}</span></p> `;
    }
}

function arrangePlate(arr2ways) {
    let tableArrange = ``, number, letter;
    if (productOption[0]) {
        for (let k = 0; k < arr2ways.length; k += 96) {
            if (productOption[2].length >= k / 96 + 1) {
                pName = productOption[2][k / 96];
                pWell = productOption[3][k / 96];
            } else {
                pName = k / 96 + 1;
                pWell = false;
                productOption[2].push(pName);
                productOption[3].push(pWell);
            }
            tableArrange += `
                <div class="row align-items-center">
                <div class="col-lg-3 col-sm-12">
                    <div class="input-group mb-3 align-middle">
                        <span class="input-group-text plate-label-label">${plateLabelLabelText}</span>
                        <input type="text" class="form-control plate-label" onchange="updateOption(this)" placeholder="${plateLabelPlaceholder + (k / 96 + 1)}" value="${pName}">
                    </div>
                </div>
                <div class="col-lg-3 col-sm-12 d-none">
                    <div class="form-check mb-3 align-middle">
                    <input class="form-check-input well-label-input" type="checkbox" onchange="updateOption(this)" id="well-label-${k}" ${(productOption[3][k / 96]) ? 'checked' : ''}>
                        <label class="form-check-label well-label" for="well-label-${k}">
                            ${wellLabelText}
                        </label>
                    </div>
                </div>
            </div>
                <table class="table table-borderless table-arrange align-middle text-center" style="min-width:1000px">
                    <colgroup>
                        <col width="4%">
                            <col span="12" width="8%">
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col" style="width: 50px;"></th>`;
            for (let i = 1; i < 13; i++) {
                number = (i < 10) ? '0' + i : i;
                colClick = (arr2ways.includes(``)) ? `` : `class="col-hover" onclick="emptyCol(${i + k - 1}, ${productOption[0]})"`;
                tableArrange += `<th ${colClick} style="width: 100px;"><span>${number}</span></th>`;
            }
            tableArrange += `</tr>
                            </thead>
                            <tbody>`;
            for (let i = 0; i < 96; i += 12) {
                letter = String.fromCharCode(i / 12 + 1 + 64);
                rowClick = (arr2ways.includes(``)) ? `` : `class="row-hover c-pointer" onclick="emptyRow(${i + k}, ${productOption[0]})"`;
                tableArrange += `<tr>
                                    <th scope="row" ${rowClick}><span>${letter}</span></th>`;
                for (let j = 0; j < 12; j++) {
                    if (i + j + k < arr2ways.length) {
                        if (arr2ways[i + j + k][0] == undefined) {
                            tableArrange += `<td class="cell-hover c-pointer" onclick="emptyCell('remove', ${i + j + k}, ${productOption[0]})">×</td>`;
                        } else {
                            number = ((j + 1) < 10) ? '0' + (j + 1) : (j + 1);
                            arr2ways[i + j + k][6] = pName + letter + number;
                            cellClick = (arr2ways.includes(``)) ? `` : `class="cell-hover c-pointer" onclick="emptyCell('add', ${i + j + k}, ${productOption[0]})"`;
                            tableArrange += `<td ${cellClick}>${arr2ways[i + j + k][0]}</td>`;
                        }
                    } else {
                        tableArrange += `<td></td>`;
                    }
                }
                tableArrange += `</tr>`;
            }
            tableArrange += `
                            </tbody>
                        </table>`;
        }
    } else {
        for (let k = 0; k < arr2ways.length; k += 96) {
            if (productOption[2].length >= k / 96 + 1) {
                pName = productOption[2][k / 96];
                pWell = productOption[3][k / 96];
            } else {
                pName = k / 96 + 1;
                pWell = false;
                productOption[2].push(pName);
                productOption[3].push(pWell);
            }
            tableArrange += `
                        <div class="row align-items-center">
                            <div class="col-lg-3 col-sm-12">
                                <div class="input-group mb-3 align-middle">
                                    <span class="input-group-text plate-label-label">${plateLabelLabelText}</span>
                                    <input type="text" class="form-control plate-label" onchange="updateOption(this)" placeholder="${plateLabelPlaceholder + (k / 96 + 1)}" value="${pName}">
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-12 d-none">
                                <div class="form-check mb-3 align-middle">
                                    <input class="form-check-input well-label-input" type="checkbox" onchange="updateOption(this)" id="well-label-${k}" ${(productOption[3][k / 96]) ? 'checked' : ''}>
                                        <label class="form-check-label well-label" for="well-label-${k}">
                                            ${wellLabelText}
                                        </label>
                                </div>
                            </div>
                        </div>
                        <table class="table table-borderless table-arrange align-middle text-center" style="min-width:1000px">
                            <thead>
                                <tr>
                                    <th scope="col" style="width: 50px;"></th>`;
            for (let i = 1; i < 13; i++) {
                number = (i < 10) ? '0' + i : i;
                colClick = (arr2ways.includes(``)) ? `` : `class="col-hover c-pointer" onclick="emptyCol(${i + k / 8 - 1}, ${productOption[0]})"`;
                tableArrange += `<th ${colClick} style="width: 100px;"><span>${number}</span></th>`;
            }
            tableArrange += `</tr>
                            </thead>
                            <tbody>`;
            for (let i = 0; i < 96; i += 12) {
                letter = String.fromCharCode(i / 12 + 1 + 64);
                rowClick = (arr2ways.includes(``)) ? `` : `class="row-hover c-pointer" onclick="emptyRow(${i / 12 + k}, ${productOption[0]})"`;
                tableArrange += `<tr>
                                    <th scope="row" ${rowClick}><span>${letter}</span></th>`;
                for (let j = 0; j < 12; j++) {
                    if ((i / 12 + k) + j * 8 < arr2ways.length) {
                        if (arr2ways[(i / 12 + k) + j * 8][0] == undefined) {
                            tableArrange += `<td class="cell-hover c-pointer" onclick="emptyCell('remove', ${(i / 12 + k) + j * 8}, ${productOption[0]})">×</td>`;
                        } else {
                            number = ((j + 1) < 10) ? '0' + (j + 1) : (j + 1);
                            arr2ways[(i / 12 + k) + j * 8][6] = pName + letter + number;
                            cellClick = (arr2ways.includes(``)) ? `` : `class="cell-hover c-pointer" onclick="emptyCell('add', ${(i / 12 + k) + j * 8}, ${productOption[0]})"`;
                            tableArrange += `<td ${cellClick}>${arr2ways[(i / 12 + k) + j * 8][0]}</td>`;
                        }
                    } else {
                        tableArrange += `<td></td>`;
                    }
                }
                tableArrange += `</tr>`;
            }
            tableArrange += `
                            </tbody>
                        </table>`;
        }
    }
    oligoList.innerHTML = displayOligo(arr2ways, false);
    return tableArrange;
}

/*---------------------------------
Hiển thị tổng kết chi phí và các phụ phí phát sinh cho sản phẩm oligo trước khi đưa vào giỏ hàng
-----------------------------------*/
function summaryOligo() {
    var sumText = ``, plateArrangeFee = 0, plateNameFee = 0, wellNameFee = 0, packageBoxFee = 0, totalSurchanges = 0, subTotalAmount = 0,
        totalAmount = parseInt(document.getElementById('product-oligo-subtotal').innerText),
        lowNuTrigger = document.querySelectorAll('.lownu-trigger'),
        statusTrigger = document.querySelectorAll('.status-trigger'),
        normalizationTrigger = document.querySelectorAll('.normalization-trigger'),
        a, b, c, d, e, f, g, h;
    sumText += `<table class="table table-hover my-3">
    <tr>
        <th scope="col" class="text-start ps-5">Diễn giải</th>
        <th scope="col" class="text-end pe-5">Giá trị</th>
    </tr>`;

    if (isPlate()) {
        plateArrangeFee += (productArr.includes('')) ? arrangeFee : 0;
        for (let i = 0; i < productOption[2].length; i++) {
            plateNameFee += (productOption[2][i] != i + 1) ? plateFee : 0;
            wellNameFee += (productOption[3][i]) ? wellFee : 0;
        }
        productOption[4] = plateArrangeFee + plateNameFee + wellNameFee;
        d = 96;
    } else {
        a = (productArr.length % 20 != 0) ? (productArr.length % 20) / 20 : 1;
        b = (productArr.length % 45 != 0) ? (productArr.length % 45) / 45 : 1;
        d = (Math.max(a, b) == a) ? 20 : 45;
    }

    e = (productArr.length % d == 0) ? productArr.length / d : (productArr.length - (productArr.length % d)) / d + 1;
    for (const lowNu of lowNuTrigger) {
        f = (parseInt(lowNu.innerText) < 14) ? true : false;
        if (f) break;
    }
    for (const status of statusTrigger) {
        g = (status.innerText == yes) ? true : false;
        if (g) break;
    }
    for (const normalization of normalizationTrigger) {
        h = (parseInt(normalization.innerText) > 0) ? true : false;
        if (h) break;
    }
    sumText += (f) ? `<tr>
        <td scope="col" colspan="2" class="text-start ps-5">Phụ phí ${lowNu.toLocaleString()}đ đã được áp dụng với các trình tự có số nucleotide ít hơn ${stringLength[1]}</td>
    </tr>`: ``;
    sumText += (g) ? `<tr>
        <td scope="col" colspan="2" class="text-start ps-5">Phụ phí ${dryFee.toLocaleString()}đ đã được áp dụng với các trình tự được yêu cầu sấy khô trước khi giao</td>
    </tr>`: ``;
    sumText += (h) ? `<tr>
        <td scope="col" colspan="2" class="text-start ps-5">Phụ phí ${normalizationFee.toLocaleString()}đ đã được áp dụng với các trình tự có nồng độ tùy chỉnh</td>
    </tr>`: ``;
    sumText += `<tr>
        <td scope="col" colspan="2" class="text-start ps-5">Các chuỗi nucleotide sau khi sản xuất theo quy trình tiêu chuẩn của Phù Sa genomics sẽ được sắp xếp và đóng gói vào các hộp trước khi giao hàng. Phù Sa genomics tạm tính quy cách đóng gói ${e} hộp ${d} cho ${productArr.length} chuỗi nucleotide đã nhập. Quy cách này có thể thay đổi cho phù hợp theo điều kiện thực tế.</td>
    </tr>`;
    sumText += `<tr>
        <td scope="col" class="text-start ps-5">Giá trị Oligo đã nhập</td>
        <td scope="col" class="text-end pe-5">${totalAmount.toLocaleString()}đ</td>
    </tr>`;
    packageBoxFee += (totalAmount <= minOrderValue) ? packageFee : 0;
    sumText += (packageBoxFee != 0) ? `<tr><td scope="col" class="text-start ps-5">${packageFeeText + minOrderValue.toLocaleString()}đ</td><td scope="col" class="text-end pe-5">${packageBoxFee.toLocaleString()}đ</td></tr>` : ``;
    sumText += (plateArrangeFee != 0) ? `<tr><td scope="col" class="text-start ps-5">${basePlateArrangeFeeText}</td><td scope="col" class="text-end pe-5">${arrangeFee.toLocaleString()}đ</td></tr>` : ``;
    sumText += (plateNameFee != 0) ? `<tr><td scope="col" class="text-start ps-5">${plateNameFeeText}</td><td scope="col" class="text-end pe-5">${plateNameFee.toLocaleString()}đ</td></tr>` : ``;
    sumText += (wellNameFee != 0) ? `<tr><td scope="col" class="text-start ps-5">${wellNameFeeText}</td><td scope="col" class="text-end pe-5">${wellNameFee.toLocaleString()}đ</td></tr>` : ``;
    totalSurchanges = plateArrangeFee + plateNameFee + wellNameFee + packageBoxFee;
    subTotalAmount = totalAmount + totalSurchanges;
    sumText += (totalSurchanges != 0) ? `<tr><th scope="col" class="text-start ps-5">Tổng giá trị gói hàng Oligo</th><th scope="col" class="text-end pe-5">${subTotalAmount.toLocaleString()}đ</th></tr>` : ``;
    sumText += `</table>`;

    quantityOligo.innerText = e;
    priceOligo.innerText = subTotalAmount / e;
    return sumText;
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
            for (key in output) {
                if (output.hasOwnProperty(key)) {
                    validateListOligo(output[key]);
                }
            }
            if (productArr.length) {
                oligoList.innerHTML = displayOligo(productArr);
                if (isPlate()) {
                    confirmOligo.classList.remove('d-none');
                }
                resetForm();
            }
        } catch (e) {
            validateExcel.innerHTML = `<li>${generalErrText}</li><li>${e}</li>`;
        }
    };
})();

var do_file = (function () {
    var use_worker = true,
        use_utf8 = true;

    var xw = function xw(data, cb) {
        var worker = new Worker('http://phusagenomics.com/public/fe/js/sheetjs/xlsxworker.js');
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
        excelProcess.innerText = processing;
        do_file(e.target.files);
    }, false);
})();