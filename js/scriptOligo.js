var dryFee = 30000, lowNu = 25000, plateFee = 50000, wellFee = 240000, arrangeFee = 50000,
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
    priceOligo = document.getElementById('product-oligo-price');

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

if (productArr.length > 0) {
    window.onbeforeunload = function (e) {
        return 'Bạn có chắc chắn không?';
    };
}
btnDatHang.addEventListener('click', function () {
    switch (productSku.innerText) {
        case 'PremiumOligo':
            baseList = ['A', 'T', 'C', 'G', 'Y', 'R', 'W', 'S', 'K', 'M', 'D', 'V', 'H', 'B', 'X', 'N'];
            nameLength = [3, 15];
            stringLength = [6, 15, 36, 75];
            odList = ['1.5+', '3+', '3+'];
            typeList = ['PremiumOligo.00', 'PremiumOligo.01', 'PremiumOligo.02'];
            normalizationList = [100];
            turnAroundTimeList = [48, 48, 72];
            unitPriceList = [4900, 4900, 5700];
            break;

        case 'LongOligo':
            baseList = ['A', 'T', 'C', 'G', 'Y', 'R', 'W', 'S', 'K', 'M', 'D', 'V', 'H', 'B', 'X', 'N'];
            nameLength = [3, 15];
            stringLength = [76, 121, 135];
            odList = ['5+', '5+'];
            typeList = ['LongOligo.01', 'LongOligo.02'];
            normalizationList = [50];
            turnAroundTimeList = [96, 96];
            unitPriceList = [8200, 9600];
            break;

        case 'HIODOligo':
            baseList = ['A', 'T', 'C', 'G', 'Y', 'R', 'W', 'S', 'K', 'M', 'D', 'V', 'H', 'B', 'X', 'N'];
            nameLength = [3, 15];
            stringLength = [15, 31, 70];
            odList = ['30', '30'];
            typeList = ['HiOD Oligo.01.30', 'HiOD Oligo.02.30'];
            normalizationList = [];
            turnAroundTimeList = [48, 72];
            unitPriceList = [18000, 21800];
            break;

        case 'GenomicOligo':
            baseList = ['A', 'T', 'C', 'G', 'Y', 'R', 'W', 'S', 'K', 'M', 'D', 'V', 'H', 'B', 'X', 'N'];
            nameLength = [3, 15];
            stringLength = [6, 15, 36, 51, 80];
            odList = ['1+', '1.5+', '1.5+', '1.5+'];
            typeList = ['GenomicOligoGA.00', 'GenomicOligoGA.01', 'GenomicOligoGA.02', 'GenomicOligoGA.03'];
            normalizationList = [50];
            turnAroundTimeList = [48, 48, 72, 72];
            unitPriceList = [5400, 5400, 6000, 6200];
            break;
        case 'OligoScreeningPlate':
            baseList = ['A', 'T', 'C', 'G', 'Y', 'R', 'W', 'S', 'K', 'M', 'D', 'V', 'H', 'B', 'X', 'N'];
            nameLength = [3, 15];
            stringLength = [15, 36, 75];
            odList = ['0.5+', '0.5+'];
            typeList = ['OSP.01.02', 'OSP.02.02'];
            normalizationList = [];
            turnAroundTimeList = [48, 72];
            unitPriceList = [2800, 3200];
            break;

        case 'OligoGenomicPlate':
            baseList = ['A', 'T', 'C', 'G', 'Y', 'R', 'W', 'S', 'K', 'M', 'D', 'V', 'H', 'B', 'X', 'N'];
            nameLength = [3, 15];
            stringLength = [15, 36, 75];
            odList = ['0.5+', '0.5+'];
            typeList = ['GSPGA.01.02', 'GSPGA.02.02'];
            normalizationList = [];
            turnAroundTimeList = [48, 72];
            unitPriceList = [3300, 3800];
            break;

        case 'Endo-ExoModification':
            baseList = ['A', 'T', 'C', 'G', 'Y', 'R', 'W', 'S', 'K', 'M', 'D', 'V', 'H', 'B', 'X', 'N'];
            nameLength = [3, 15];
            stringLength = [6, 36, 50];
            odList = ['5', '5'];
            typeList = ['Modi.premium.01', 'Modi.premium.02'];
            normalizationList = [];
            turnAroundTimeList = [168, 168];
            unitPriceList = [4900, 5700];
            modifiedBaseList = ['I', 'O', 'U'];
            modifiedFeeList = [190000, 240000, 190000];
            modified5ValueList = ['Thiol-C6-S-S', 'Biotin', 'C6-Spacer', 'C3-Spacer', 'NH2-C6', 'NH2-C12', 'PO4-Phosphat'];
            modified5NameList = ['Thiol C6 S-S 200 nmol', 'Biotin 200 nmol', 'C6-Spacer 200 nmol', 'C3-Spacer 200 nmol', 'NH2 C6 200 nmol', 'NH2 C12 200 nmol', 'Phosphorylation 200 nmol'];
            modified5FeeList = [2400000, 1170000, 820000, 820000, 584000, 1050000, 584000];
            modified3ValueList = ['C6-Spacer', 'C3-Spacer', 'Thiol-C6-S-S', 'PO4-Phosphat', 'Biotin', 'Biotin-TEG', 'NH2-C6', 'NH2-C12'];
            modified3NameList = ['C6-Spacer 200 nmol', 'C3-Spacer 200 nmol', 'Thiol C6 S-S 200 nmol', 'Phosphorylation 200 nmol', 'Biotin 200 nmol', 'Biotin-TEG 200 nmol', 'NH2 C6 200nmol', 'NH2 C12 200 nmol'];
            modified3FeeList = [820000, 820000, 2340000, 584000, 700000, 1634000, 584000, 1050000];
            break;
        case 'Probe':
            baseList = ['A', 'T', 'C', 'G', 'Y', 'R', 'W', 'S', 'K', 'M', 'D', 'V', 'H', 'B', 'X', 'N'];
            nameLength = [3, 15];
            stringLength = [6, 36, 50];
            odList = ['5', '5'];
            typeList = ['Probe.Premium 01', 'Probe.Premium 02'];
            normalizationList = [];
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
    oligoNormalization.classList.remove('d-none');
    checkConfirmOligoNormalization.classList.remove('d-none');
    labelConfirmOligoNormalization.classList.remove('d-none');
    btnBeginOligo.disabled = true;
    addOption(oligoNormalization, normalizationList, normalizationList, ' pmol/µL');
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
    checkConfirmOligoNormalization.checked = false;
})

oligoSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    let oName = oligoName.value.replace(/\s/g, '').toUpperCase(),
        oString = oligoString.value.replace(/\s/g, '').toUpperCase(),
        oNormalization = (oligoStatus.innerText == "wet") ? oligoNormalization.value : '0',
        oStatus = (oligoStatus.innerText == 'dry') ? yes : no,
        mod5 = fiveModified.value, mod3 = threeModified.value, oProbe = probeOligo.value;
    if (validateOligo(oName, oString) == `` || validateOligo(oName, oString) == `<li>${difficultOligo}</li>`) {
        productArr.push(createRow(oName, oString, oStatus, oNormalization, mod5, mod3, oProbe));
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

oligoName.addEventListener('change', function () {
    let oName = oligoName.value.replace(/\s/g, '').toUpperCase(),
        oString = oligoString.value.replace(/\s/g, '').toUpperCase();
    oligoName.value = oName;
    validateSingle.innerHTML = validateOligo(oName, oString);
})

oligoString.addEventListener('keyup', function () {
    let oName = oligoName.value.replace(/\s/g, '').toUpperCase(),
        oString = oligoString.value.replace(/\s/g, '').toUpperCase();
    oligoString.value = oString;
    // console.log(oName, oString);
    validateSingle.innerHTML = validateOligo(oName, oString);
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
            if (validateOligo(oName, oString) == `` || validateOligo(oName, oString) == `<li>${difficultOligo}</li>`) {
                productArr[i] = createRow(oName, oString, oStatus, oNormalization);
                oligoList.innerHTML = displayOligo(productArr);
                resetForm();
            }
        }
    }
})

confirmOligo.addEventListener('click', function (e) {
    var btnRemove = document.querySelectorAll('.btn-remove'),
        btnEdit = document.querySelectorAll('.btn-edit');
    e.preventDefault();
    let checkOligo = true;
    for (let i = 0; i < productArr.length; i++) {
        if (validateOligo(productArr[i][0], productArr[i][1]) == '' || validateOligo(productArr[i][0], productArr[i][1]) == '<li>' + existName + '</li>' || validateOligo(productArr[i][0], productArr[i][1]) == '<li>' + difficultOligo + '</li>') {
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
        if (isPlate()) {
            oligoArrange.innerHTML = arrangePlate(productArr);
            addToCartOligo.disabled = true;
            btnArrangeGroup.classList.remove('d-none');
        } else {
            let a, b, c, d, e;
            a = (productArr.length % 20 != 0) ? (productArr.length % 20) / 20 : 1;
            b = (productArr.length % 45 != 0) ? (productArr.length % 45) / 45 : 1;
            c = (productArr.length % 96 != 0) ? (productArr.length % 96) / 96 : 1;
            d = (Math.max(a, b, c) == a) ? 20 : (Math.max(a, b, c) == b) ? 45 : 96;
            e = (productArr.length % d == 0) ? productArr.length % d : (productArr.length - (productArr.length % d)) / d + 1;
            oligoSummary.innerHTML = productArr.length + quantityOligoText + ` <span id=product-oligo-quantity>${e}</span> ` + box + d;
            priceOligo.innerText = parseInt(document.getElementById('product-oligo-subtotal').innerText) / e;
        }
        addToCartOligo.classList.remove('d-none');
    }
})

btnHorizon.addEventListener('click', function () {
    addToCartOligo.disabled = false;
    productOption[0] = true;
    oligoArrange.innerHTML = arrangePlate(clearEmpty());
})

btnVertical.addEventListener('click', function () {
    addToCartOligo.disabled = false;
    productOption[0] = false;
    oligoArrange.innerHTML = arrangePlate(clearEmpty());
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
    input = input.replace(/\s/g, '').toUpperCase(); //Viết hoa chuỗi input lên
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
            let oName = oligo[0].replace(/\s/g, '').replace(/\n/g, '').replace(/\"/g, '').toUpperCase(),
                oString = oligo[1].replace(/\s/g, '').replace(/\n/g, '').replace(/\"/g, '').toUpperCase(),
                oNormalization = (oligoStatus.innerText == "wet") ? oligoNormalization.value : '0',
                oStatus = (oligoStatus.innerText == 'dry') ? yes : no;
            // console.log(i, oName, validateOligo(oName, oString));
            if (validateOligo(oName, oString) != '') {
                textErr += validateOligo(oName, oString);
            }
            if (validateOligo(oName, oString) == '' || validateOligo(oName, oString) == '<li>' + difficultOligo + '</li>') {
                productArr.push(createRow(oName, oString, oStatus, oNormalization));
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
function validateOligo(name, string) {
    let arrayName = [], arrayString = [], text = '';
    for (let i = 0; i < productArr.length; i++) {
        arrayName.push(productArr[i][0]);
        arrayString.push(productArr[i][0] + productArr[i][1]);
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
        case name.length < nameLength[0]:
            oligoName.classList.add('border-danger');
            oligoSubmit.disabled = true;
            text += `<li>Line ${name}: ${minNameLengthText}${nameLength[0]}${letter}</li>`;
        case name.length > nameLength[1]:
            oligoName.classList.add('border-danger');
            oligoSubmit.disabled = true;
            text += `<li>Line ${name}: ${maxNameLengthText}${nameLength[1]}${letter}</li>`;
            break;
        case string == "":
            oligoString.classList.add('border-danger');
            oligoSubmit.disabled = true;
            text += `<li>Line ${name}: ${noEmptyString}</li>`;
            break;
        case validateInputArray(string, baseList) != '':
            oligoString.classList.add('border-danger');
            oligoSubmit.disabled = true;
            text += `<li>Line ${name}: ${validateInputArray(string, baseList)}</li>`;
            break;
        case string.length < stringLength[0]:
            oligoString.classList.add('border-danger');
            oligoSubmit.disabled = true;
            text += `<li>Line ${name}: ${minStringLengthText}${stringLength[0]}${base}</li>`;
            break;
        case string.length > stringLength[stringLength.length - 1]:
            oligoString.classList.add('border-danger');
            oligoSubmit.disabled = true;
            text += `<li>Line ${name}: ${maxStringLengthText}${stringLength[stringLength.length - 1]}${base}</li>`;
            break;
        case string.includes('GGGGGG'):
            oligoString.classList.add('border-danger');
            oligoSubmit.disabled = false;
            text += `<li>Line ${name}: ${difficultOligo}</li>`;
            break;
        default:
            oligoName.classList.remove('border-danger');
            oligoString.classList.remove('border-danger');
            oligoSubmit.disabled = false;
            break;
    }
    if (arrayName.includes(name) && !arrayString.includes(name + string)) {
        oligoName.classList.add('border-danger');
        oligoString.classList.add('border-danger');
        oligoSubmit.disabled = true;
        text += `<li>Line ${name}: ${existName}</li>`;
    } else {
        oligoName.classList.remove('border-danger');
        oligoString.classList.remove('border-danger');
        oligoSubmit.disabled = false;
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
    probeOligo.value = '';
}

/*---------------------------------
Tạo thêm một mảng con (hàng dữ liệu)
-----------------------------------*/
function createRow(name, sequence, dry, normalization, modified5 = '', modified3 = '', prb = '') {
    let array = [];
    name = name.replace(/\s/g, '').toUpperCase();
    sequence = sequence.replace(/\s/g, '').toUpperCase();
    array.push(name, sequence, dry, normalization, modified5, modified3, prb);
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
Kiểm tra coi có phải plate không
-----------------------------------*/
function isPlate() {
    return (productSku.innerText == 'OligoScreeningPlate' || productSku.innerText == 'OligoGenomicPlate') ? true : false;
}

/*---------------------------------
Kiểm tra coi có phải modified không
-----------------------------------*/
function isModified() {
    return (productSku.innerText == 'Endo-ExoModification') ? true : false;
}

/*---------------------------------
Kiểm tra coi có phải modified không
-----------------------------------*/
function isProbe() {
    return (productSku.innerText == 'Probe') ? true : false;
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
            } else {
                break;
            }
        }
    } else {
        for (let i = 0; i < 96; i += 8) {
            if (value + i < productArr.length) {
                productArr.splice(value + i, 0, '');
                oligoArrange.innerHTML = arrangePlate(productArr);
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
            } else {
                break;
            }
        }
    } else {
        for (let i = 0; i < 8; i++) {
            if (value * 8 < productArr.length) {
                productArr.splice(value * 8 + i, 0, '');
                oligoArrange.innerHTML = arrangePlate(productArr);
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
    // console.log(productOption);
}

/*---------------------------------
Hiển thị mảng lớn dữ liệu ra màn hình
-----------------------------------*/
function displayOligo(arr2ways) {
    if (arr2ways.length) {
        let subTotal = 0,
            str = `
        <table class="table table-striped table-hover table-sm align-middle">
            <thead>
                <tr>
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
                    <th scope="col" class="text-end">${colTotal}</th>
                    <th scope="col" class="text-center">${colEDD}</th>
                    <th scope="col">&nbsp;</th>
                </tr>
            </thead>
            <tbody>`;
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
                case (!isNaN(stringLength[4]) && arr2ways[i][1].length > stringLength[3] && arr2ways[i][1].length <= stringLength[4]):
                    od = odList[3];
                    type = typeList[3];
                    eDD = dmYFormat(new Date(3600000 * turnAroundTimeList[3] + time));
                    unitPrice = unitPriceList[3];
                    break;
                case (!isNaN(stringLength[5]) && arr2ways[i][1].length > stringLength[4] && arr2ways[i][1].length <= stringLength[5]):
                    od = odList[4];
                    type = typeList[4];
                    eDD = dmYFormat(new Date(3600000 * turnAroundTimeList[4] + time));
                    unitPrice = unitPriceList[4];
                    break;
                default:
                    break;
            }
            // console.log(arr2ways[i][1].length, arr2ways[i][0], unitPrice);
            fee += (arr2ways[i][1].length <= 14) ? lowNu : 0;
            fee += (arr2ways[i][2] == yes) ? dryFee : 0;
            if (isModified()) {
                fee += (arr2ways[i][4] != '') ? parseInt(modified5FeeList[modified5ValueList.indexOf(arr2ways[i][4])]) : 0;
                fee += (arr2ways[i][5] != '') ? parseInt(modified3FeeList[modified3ValueList.indexOf(arr2ways[i][5])]) : 0;
                for (let j = 0; j < modifiedBaseList.length; j++) {
                    fee += (arr2ways[i][1].includes(modifiedBaseList[j])) ? (arr2ways[i][1].match(new RegExp(modifiedBaseList[j], "g")) || []).length * parseInt(modifiedFeeList[j]) : 0;
                }
            } else if (isProbe()) {
                fee += (arr2ways[i][6] != '') ? parseInt(probeFeeList[probeValueList.indexOf(arr2ways[i][6])]) : 0;
            }
            total = unitPrice * arr2ways[i][1].length + fee;
            subTotal += total;
            str += `<tr>
                        <td scope="col" class="text-center">${arr2ways[i][0]}</td>`;
            str += (isModified()) ? `<td scope="col" class="text-center">${arr2ways[i][4]}</td>` : ``;
            str += `    <td scope="col" style="max-width: 25rem;">${arr2ways[i][1]}</td>`;
            str += (isModified()) ? `<td scope="col" class="text-center">${arr2ways[i][5]}</td>` : ``;
            str += (isProbe()) ? `<td scope="col" class="text-center">${arr2ways[i][6]}</td>` : ``;
            str += `<td scope="col" class="text-center">${arr2ways[i][1].length}</td>
                        <td scope="col" class="text-center">${od}</td>
                        <td scope="col" class="text-center">${type}</td>`;
            str += (isModified() || isProbe()) ? `` : `<td scope="col" class="text-center">${arr2ways[i][2]}</td>`;
            str += (isModified() || isProbe()) ? `` : `<td scope="col" class="text-center">${arr2ways[i][3]}</td>`;
            str += `    <td scope = "col" class="text-end" > ${unitPrice.toLocaleString()}</td>
                        <td scope="col" class="text-end">${fee.toLocaleString()}</td>
                        <td scope="col" class="text-end">${total.toLocaleString()}</td>
                        <td scope="col" class="text-center">${eDD}</td>
                        <td scope="col" class="text-center">
                            <button class="btn btn-link btn-edit" onclick="editRow(${i})"><i class="fa-solid fa-pencil"></i></button>
                            <button class="btn btn-link btn-remove" onclick="removeRow(${i})"><i class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr > `;
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
        return str;
    } else {
        return `<p> ${guideText} <span class="badge bg-primary text-light">${addBtnLabel}</span></p> `;
    }
}

function arrangePlate(arr2ways) {
    let tableArrange = ``;
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
                <div class="col-3">
                    <div class="input-group mb-3 align-middle">
                        <span class="input-group-text plate-label-label">${plateLabelLabelText}</span>
                        <input type="text" class="form-control plate-label" onchange="updateOption(this)" placeholder="${plateLabelPlaceholder + (k / 96 + 1)}" value="${pName}">
                    </div>
                </div>
                <div class="col-3">
                    <div class="form-check mb-3 align-middle">
                    <input class="form-check-input well-label-input" type="checkbox" onchange="updateOption(this)" id="well-label-${k}" ${(productOption[3][k / 96]) ? 'checked' : ''}>
                        <label class="form-check-label well-label" for="well-label-${k}">
                            ${wellLabelText}
                        </label>
                    </div>
                </div>
            </div>
                <table class="table table-borderless table-arrange align-middle text-center">
                    <colgroup>
                        <col width="4%">
                            <col span="12" width="8%">
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col" style="width: 50px;"></th>`;
            for (let i = 1; i < 13; i++) {
                number = (i < 10) ? '0' + i : i;
                tableArrange += `<th class="col-hover" onclick="emptyCol(${i + k - 1}, ${productOption[0]})" style="width: 100px;"><span>${number}</span></th>`;
            }
            tableArrange += `</tr>
                            </thead>
                            <tbody>`;
            for (let i = 0; i < 96; i += 12) {
                letter = String.fromCharCode(i / 12 + 1 + 64);
                tableArrange += `<tr>
                                    <th scope="row" class="row-hover c-pointer" onclick="emptyRow(${i + k}, ${productOption[0]})"><span>${letter}</span></th>`;
                for (let j = 0; j < 12; j++) {
                    if (i + j + k < arr2ways.length) {
                        if (arr2ways[i + j + k][0] == undefined) {
                            tableArrange += `<td class="cell-hover c-pointer" onclick="emptyCell('remove', ${i + j + k}, ${productOption[0]})">×</td>`;
                        } else {
                            tableArrange += `<td class="cell-hover c-pointer" onclick="emptyCell('add', ${i + j + k}, ${productOption[0]})">${arr2ways[i + j + k][0]}</td>`;
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
                            <div class="col-3">
                                <div class="input-group mb-3 align-middle">
                                    <span class="input-group-text plate-label-label">${plateLabelLabelText}</span>
                                    <input type="text" class="form-control plate-label" onchange="updateOption(this)" placeholder="${plateLabelPlaceholder + (k / 96 + 1)}" value="${pName}">
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-check mb-3 align-middle">
                                    <input class="form-check-input well-label-input" type="checkbox" onchange="updateOption(this)" id="well-label-${k}" ${(productOption[3][k / 96]) ? 'checked' : ''}>
                                        <label class="form-check-label well-label" for="well-label-${k}">
                                            ${wellLabelText}
                                        </label>
                                </div>
                            </div>
                        </div>
                        <table class="table table-borderless table-arrange align-middle text-center">
                            <thead>
                                <tr>
                                    <th scope="col" style="width: 50px;"></th>`;
            for (let i = 1; i < 13; i++) {
                number = (i < 10) ? '0' + i : i;
                tableArrange += `<th class="col-hover c-pointer" onclick="emptyCol(${i + k / 8 - 1}, ${productOption[0]})" style="width: 100px;"><span>${number}</span></th>`;
            }
            tableArrange += `</tr>
                            </thead>
                            <tbody>`;
            for (let i = 0; i < 96; i += 12) {
                letter = String.fromCharCode(i / 12 + 1 + 64);
                tableArrange += `<tr>
                                    <th scope="row" class="row-hover c-pointer" onclick="emptyRow(${i / 12 + k}, ${productOption[0]})"><span>${letter}</span></th>`;
                for (let j = 0; j < 12; j++) {
                    if ((i / 12 + k) + j * 8 < arr2ways.length) {
                        if (arr2ways[(i / 12 + k) + j * 8][0] == undefined) {
                            tableArrange += `<td class="cell-hover c-pointer" onclick="emptyCell('remove', ${(i / 12 + k) + j * 8}, ${productOption[0]})">×</td>`;
                        } else {
                            tableArrange += `<td class="cell-hover c-pointer" onclick="emptyCell('add', ${(i / 12 + k) + j * 8}, ${productOption[0]})">${arr2ways[(i / 12 + k) + j * 8][0]}</td>`;
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
    tableArrange += `<hr class="py-2"><div class="mb-3">`;
    let plateArrangeFee = 0, plateNameFee = 0, wellNameFee = 0, totalSurchanges = 0, subTotalAmount = 0;
    plateArrangeFee += (productArr.includes('')) ? arrangeFee : 0;
    for (let i = 0; i < productOption[2].length; i++) {
        if (productOption[2][i] != i + 1) plateNameFee += plateFee;
        if (productOption[3][i]) wellNameFee += wellFee;
    }
    tableArrange += (plateArrangeFee != 0) ? basePlateArrangeFeeText + arrangeFee.toLocaleString() + `<br />` : ``;
    tableArrange += (plateNameFee != 0) ? plateNameFeeText + plateNameFee.toLocaleString() + `<br />` : ``;
    tableArrange += (wellNameFee != 0) ? wellNameFeeText + wellNameFee.toLocaleString() + `<br />` : ``;
    tableArrange += `<hr class="py-2">`;
    totalSurchanges = plateArrangeFee + plateNameFee + wellNameFee;
    subTotalAmount = parseInt(document.getElementById('product-oligo-subtotal').innerText) + totalSurchanges;

    oligoSummary.innerHTML = productArr.length + quantityOligoText + ` <span id=product-oligo-quantity>${productOption[2].length}</span> ` + box + `96`;
    priceOligo.innerText = subTotalAmount / productOption[2].length;

    tableArrange += totalSurchagesText + totalSurchanges.toLocaleString() + `<br />`;
    tableArrange += `</div>`;
    productOption[4] = totalSurchanges;
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
        excelProcess.innerText = processing;
        do_file(e.target.files);
    }, false);
})();