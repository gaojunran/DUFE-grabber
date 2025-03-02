let interval = setInterval(() => {
    document.querySelector("#ifra").contentWindow.document.querySelector("#queryButton").click();
    const rows = document.querySelector("#ifra").contentWindow.document.querySelectorAll('#xirxkxkbody tr');
    // 请修改此行，以匹配想要的课程
    const desired = ["情景日语会话", "日语与日本印象", "英语国家社会与文化"];

    rows.forEach(row => {
        const courseNameCell = row.cells[2];
        if (courseNameCell) {
            const courseName = courseNameCell.textContent.trim();
            if (desired.some(course => courseName.includes(course))) {
                // 找到合适的课程，选中复选框
                const checkbox = row.querySelector('input[type="checkbox"]');
                if (checkbox) {
                    checkbox.click()  // 这个复选框是由click回调控制的
                    clearInterval(interval);  // 立刻停止刷新，防止和提交冲突
                    document.querySelector("#submitButton").click();
                } 
            }
        }
    });
}, 500);  // 此处的时间表示刷新间隔（毫秒），可以根据需要调整
