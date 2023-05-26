var Random = Mock.Random;
Random.date();
var dataMock = Mock.mock({
    'list|50': [{
        'simCar|13000000000-19900000000': 1440191734422,
        'operator|1': [
            '移动',
            '联通',
            '电信'
        ],
        'packageName|1': [
            '5元30M',
            '10元500M',
            '50元100G'
        ],
        validityPeriod: '@date',
        'unitPrice|5-10': 5,
        'quantity|10-30': 12,
        'amount|1-100': 60,
        'imei|800000000000000-900000000000000': 868120203709164,
        user: 'test'
    }]
});

console.log(dataMock)
