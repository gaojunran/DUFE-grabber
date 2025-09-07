let interval = setInterval(() => {
    document.querySelector("#ifra").contentWindow.document.querySelector("#queryButton").click();
    const rows = document.querySelector("#ifra").contentWindow.document.querySelectorAll('#xirxkxkbody tr');
    // 请修改此行，以匹配想要的课程
    const desired = ["党史", "新中国史", "改革开放史", "社会主义发展史"];

    rows.forEach(row => {
        const courseNameCell = row.cells[2];
        if (courseNameCell) {
            const courseName = courseNameCell.textContent.trim();
            if (desired.some(course => courseName.includes(course))) {
                // 找到合适的课程，选中复选框
                const checkbox = row.querySelector('input[type="checkbox"]');
                if (checkbox) {
                    checkbox.click();  // 这个复选框是由 click 回调控制的
                    clearInterval(interval);  // 立刻停止刷新，防止和提交冲突

                    // 模拟 Ctrl+点击提交按钮
                    const submitBtn = document.querySelector("#submitButton");
                    if (submitBtn) {
                        const ctrlClick = new MouseEvent("click", {
                            bubbles: true,
                            cancelable: true,
                            view: window,
                            ctrlKey: true
                        });
                        submitBtn.dispatchEvent(ctrlClick);
                    }
                }
            }
        }
    });
}, 500);  // 此处的时间表示刷新间隔（毫秒），可以根据需要调整
