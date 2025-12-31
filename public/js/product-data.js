const products = {
    "hdpe": {
        name: "Ống Nhựa HDPE Chính Hãng",
        sku: "HDPE-002",
        description: "Ống nhựa HDPE (High Density Polyethylene) có độ bền cực cao, chịu được hóa chất mạnh và môi trường khắc nghiệt. Sản phẩm chuyên dụng cho hệ thống cấp thoát nước đô thị, khu công nghiệp và tưới tiêu.",
        image: "images/hdpe_pipe.png",
        features: [
            "Độ bền hoá chất cực tốt, không rỉ sét",
            "Chịu được ánh nắng mặt trời (kháng tia UV)",
            "Độ đàn hồi cao, không bị gãy khi đất sụt lún",
            "Các mối nối hàn nhiệt bền vững tuyệt đối"
        ],
        // Custom Header HTML for complex layout
        customTableHead: `
            <tr>
                <th rowspan="3" style="background: white; color: black; border: 1px solid #ccc;">STT</th>
                <th rowspan="3" style="background: white; color: black; border: 1px solid #ccc;">Đường Kính</th>
                <th style="background: #e2efda; color: black; border: 1px solid #ccc;">PN6</th>
                <th style="background: #fff2cc; color: black; border: 1px solid #ccc;">PN8</th>
                <th style="background: #e1eff9; color: black; border: 1px solid #ccc;">PN10</th>
                <th style="background: #fceceb; color: black; border: 1px solid #ccc;">PN12.5</th>
                <th style="background: #e7e6e6; color: black; border: 1px solid #ccc;">PN16</th>
                <th style="background: #fff2cc; color: black; border: 1px solid #ccc;">PN20</th>
            </tr>
            <tr>
                <th style="background: #e2efda; color: black; border: 1px solid #ccc; font-weight: normal; font-size: 0.9em;">Chiều dày</th>
                <th style="background: #fff2cc; color: black; border: 1px solid #ccc; font-weight: normal; font-size: 0.9em;">Chiều dày</th>
                <th style="background: #e1eff9; color: black; border: 1px solid #ccc; font-weight: normal; font-size: 0.9em;">Chiều dày</th>
                <th style="background: #fceceb; color: black; border: 1px solid #ccc; font-weight: normal; font-size: 0.9em;">Chiều dày</th>
                <th style="background: #e7e6e6; color: black; border: 1px solid #ccc; font-weight: normal; font-size: 0.9em;">Chiều dày</th>
                <th style="background: #fff2cc; color: black; border: 1px solid #ccc; font-weight: normal; font-size: 0.9em;">Chiều dày</th>
            </tr>
            <tr>
                <th style="background: #e2efda; color: black; border: 1px solid #ccc; font-weight: normal; font-size: 0.8em;">mm</th>
                <th style="background: #fff2cc; color: black; border: 1px solid #ccc; font-weight: normal; font-size: 0.8em;">mm</th>
                <th style="background: #e1eff9; color: black; border: 1px solid #ccc; font-weight: normal; font-size: 0.8em;">mm</th>
                <th style="background: #fceceb; color: black; border: 1px solid #ccc; font-weight: normal; font-size: 0.8em;">mm</th>
                <th style="background: #e7e6e6; color: black; border: 1px solid #ccc; font-weight: normal; font-size: 0.8em;">mm</th>
                <th style="background: #fff2cc; color: black; border: 1px solid #ccc; font-weight: normal; font-size: 0.8em;">mm</th>
            </tr>
        `,
        // Column styles (background colors) mapping to data indices
        // Data indices: 0(STT), 1(DK), 2(PN6), 3(PN8), 4(PN10), 5(PN12.5), 6(PN16), 7(PN20)
        colStyles: [
            "text-align: center; border: 1px solid #ccc;", // STT
            "font-weight: bold; border: 1px solid #ccc;", // DK
            "background: #e2efda; text-align: right; border: 1px solid #ccc;", // PN6
            "background: #fff2cc; text-align: right; border: 1px solid #ccc;", // PN8
            "background: #e1eff9; text-align: right; border: 1px solid #ccc;", // PN10
            "background: #fceceb; text-align: right; border: 1px solid #ccc;", // PN12.5
            "background: #e7e6e6; text-align: right; border: 1px solid #ccc;", // PN16
            "background: #fff2cc; text-align: right; border: 1px solid #ccc;"  // PN20
        ],
        specsData: [
            ["1", "D20", "", "", "", "", "2.0", "2.3"],
            ["2", "D25", "", "", "", "2.0", "2.3", "3.0"],
            ["3", "D32", "", "", "2.0", "2.4", "3.0", "3.6"],
            ["4", "D40", "", "2.0", "2.4", "3.0", "3.7", "4.5"],
            ["5", "D50", "", "2.4", "3.0", "3.7", "4.6", "5.6"],
            ["6", "D63", "", "3.0", "3.8", "4.7", "5.8", "7.1"],
            ["7", "D75", "", "3.6", "4.5", "5.6", "6.8", "8.4"],
            ["8", "D90", "", "4.3", "5.4", "6.7", "8.2", "10.1"],
            ["9", "D110", "4.2", "5.3", "6.6", "8.1", "10.0", "12.3"],
            ["10", "D125", "4.8", "6.0", "7.4", "9.2", "11.4", "14.0"],
            ["11", "D140", "5.4", "6.7", "8.3", "10.3", "12.7", "15.7"],
            ["12", "D160", "6.2", "7.7", "9.5", "11.8", "14.6", "17.9"],
            ["13", "D180", "6.9", "8.6", "10.7", "13.3", "16.4", "20.1"],
            ["14", "D200", "7.7", "9.6", "11.9", "14.7", "18.2", "22.4"],
            ["15", "D225", "8.6", "10.8", "13.4", "16.6", "20.5", "25.2"],
            ["16", "D250", "9.6", "11.9", "14.8", "18.4", "22.7", "27.9"],
            ["17", "D280", "10.7", "13.4", "16.6", "20.6", "25.4", "31.3"],
            ["18", "D315", "12.1", "15.0", "18.7", "23.2", "28.6", "35.2"]
        ]
    }
};
