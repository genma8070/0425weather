fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-4121783A-8D0B-4F73-8C10-5277DFCAE882")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        function w1() {
            const adress = document.getElementById("adress1")
            const how = document.querySelector("#how1")
            const min = document.querySelector("#min1")
            const max = document.querySelector("#max1")
            for (let i = 0; i < data.records.location.length; i++) {
              
                if (data.records.location[i].locationName === (adress.innerText)) {
                    how.innerText = data.records.location[i].weatherElement[0].time[0].parameter.parameterName
                    min.innerText = data.records.location[i].weatherElement[2].time[0].parameter.parameterName
                    max.innerText = data.records.location[i].weatherElement[4].time[0].parameter.parameterName
                }
            }
        }
        w1();

        function w2() {
            const adress = document.getElementById("adress2")
            const how = document.querySelector("#how2")
            const min = document.querySelector("#min2")
            const max = document.querySelector("#max2")
            for (let i = 0; i < data.records.location.length; i++) {
                if (data.records.location[i].locationName === (adress.innerText)) {
                    how.innerText = data.records.location[i].weatherElement[0].time[0].parameter.parameterName
                    min.innerText = data.records.location[i].weatherElement[2].time[0].parameter.parameterName
                    max.innerText = data.records.location[i].weatherElement[4].time[0].parameter.parameterName
                }
            }
        }
        w2();

        function w3() {
            const adress = document.getElementById("adress3")
            const how = document.querySelector("#how3")
            const min = document.querySelector("#min3")
            const max = document.querySelector("#max3")
            for (let i = 0; i < data.records.location.length; i++) {
                
                if (data.records.location[i].locationName === (adress.innerText)) {
                    how.innerText = data.records.location[i].weatherElement[0].time[0].parameter.parameterName
                    min.innerText = data.records.location[i].weatherElement[2].time[0].parameter.parameterName
                    max.innerText = data.records.location[i].weatherElement[4].time[0].parameter.parameterName
                }
            }
        }
        w3();

        function w4() {
            const adress = document.getElementById("adress4")
            const how = document.querySelector("#how4")
            const min = document.querySelector("#min4")
            const max = document.querySelector("#max4")
            for (let i = 0; i < data.records.location.length; i++) {
               
                if (data.records.location[i].locationName === (adress.innerText)) {
                    how.innerText = data.records.location[i].weatherElement[0].time[0].parameter.parameterName
                    min.innerText = data.records.location[i].weatherElement[2].time[0].parameter.parameterName
                    max.innerText = data.records.location[i].weatherElement[4].time[0].parameter.parameterName
                }
            }
        }
        w4();

        function w5() {
            const adress = document.getElementById("adress5")
            const how = document.querySelector("#how5")
            const min = document.querySelector("#min5")
            const max = document.querySelector("#max5")
            for (let i = 0; i < data.records.location.length; i++) {
               
                if (data.records.location[i].locationName === (adress.innerText)) {
                    how.innerText = data.records.location[i].weatherElement[0].time[0].parameter.parameterName
                    min.innerText = data.records.location[i].weatherElement[2].time[0].parameter.parameterName
                    max.innerText = data.records.location[i].weatherElement[4].time[0].parameter.parameterName
                }
            }
        }
        w5();

        function w6() {
            const adress = document.getElementById("adress6")
            const how = document.querySelector("#how6")
            const min = document.querySelector("#min6")
            const max = document.querySelector("#max6")
            for (let i = 0; i < data.records.location.length; i++) {
               
                if (data.records.location[i].locationName === (adress.innerText)) {
                    how.innerText = data.records.location[i].weatherElement[0].time[0].parameter.parameterName
                    min.innerText = data.records.location[i].weatherElement[2].time[0].parameter.parameterName
                    max.innerText = data.records.location[i].weatherElement[4].time[0].parameter.parameterName
                }
            }
        }
        w6();

        function w7() {
            const adress = document.getElementById("adress7")
            const how = document.querySelector("#how7")
            const min = document.querySelector("#min7")
            const max = document.querySelector("#max7")
            for (let i = 0; i < data.records.location.length; i++) {
              
                if (data.records.location[i].locationName === (adress.innerText)) {
                    how.innerText = data.records.location[i].weatherElement[0].time[0].parameter.parameterName
                    min.innerText = data.records.location[i].weatherElement[2].time[0].parameter.parameterName
                    max.innerText = data.records.location[i].weatherElement[4].time[0].parameter.parameterName
                }
            }
        }
        w7();

        function w8() {
            const adress = document.getElementById("adress8")
            const how = document.querySelector("#how8")
            const min = document.querySelector("#min8")
            const max = document.querySelector("#max8")
            for (let i = 0; i < data.records.location.length; i++) {
               
                if (data.records.location[i].locationName === (adress.innerText)) {
                    how.innerText = data.records.location[i].weatherElement[0].time[0].parameter.parameterName
                    min.innerText = data.records.location[i].weatherElement[2].time[0].parameter.parameterName
                    max.innerText = data.records.location[i].weatherElement[4].time[0].parameter.parameterName
                }
            }
        }
        w8();

    })
