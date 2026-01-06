(() => {
  const desired = ["党史", "新中国史", "改革开放史", "社会主义发展史"];

  const getIframeDoc = () => {
    const iframe = document.querySelector("#ifra");
    return iframe?.contentWindow?.document || null;
  };

  const interval = setInterval(() => {
    const doc = getIframeDoc();
    if (!doc) return;

    // 刷新按钮
    const queryBtn = doc.querySelector("#queryButton");
    queryBtn?.click();

    const rows = doc.querySelectorAll('#xirxkxkbody tr');
    if (!rows.length) return;

    for (const row of rows) {
      const courseNameCell = row.cells?.[2];
      if (!courseNameCell) continue;

      const courseName = courseNameCell.textContent.trim();
      if (!desired.some(key => courseName.includes(key))) continue;

      // 命中目标课程 ✔
      const checkbox = row.querySelector('input[type="checkbox"]');
      if (!checkbox) continue;

      checkbox.click();
      clearInterval(interval);

      // 模拟 Ctrl+Click
      const submitBtn = document.querySelector("#submitButton");
      if (submitBtn) {
        submitBtn.dispatchEvent(
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window,
            ctrlKey: true,
          })
        );
      }
      return; // 找到后退出本轮
    }
  }, 500);
})();
