// 메뉴바 submenu 열고 닫기
document.querySelectorAll('.menu-group').forEach(group => {
    const closeBtn = group.querySelector('.open_close img:nth-child(1)');
    const openBtn = group.querySelector('.open_close img:nth-child(2)');
    const submenu = group.querySelector('.submenu');

    // 닫기 버튼
    closeBtn.addEventListener('click', () => {
        closeBtn.style.display = 'none';
        openBtn.style.display = 'inline';
        submenu.style.display = 'block';
    });

    // 열기 버튼
    openBtn.addEventListener('click', () => {
        closeBtn.style.display = 'inline';
        openBtn.style.display = 'none';
        submenu.style.display = 'none';
    });
});


// 본사 지사 검색
function filterTable() {
    const selectedBranch = document.getElementById('companyBranch').value; // 'head' or 'branch'
    const filterType = document.getElementById('searchFilter').value;      // 'department' or 'position'
    const keyword = document.getElementById('keyword').value.trim().toLowerCase();

    const employeeTable = document.querySelector('.employee-table');
    const employeeCount = employeeTable.querySelectorAll('ul')[0].children.length - 1;

    for (let i = 1; i <= employeeCount; i++) {
        // 근무지 정보 (data-branch)
        const branchCell = employeeTable.querySelectorAll('ul')[4].children[i];
        const branch = branchCell.getAttribute('data-branch');

        // 필터 타입에 맞는 셀 (부서 or 직책)
        let filterRowIndex;
        if (filterType === 'department') filterRowIndex = 2;  // 부서가 3번째 ul (index 2)
        else if (filterType === 'position') filterRowIndex = 3; // 직책이 4번째 ul (index 3)

        const filterCell = employeeTable.querySelectorAll('ul')[filterRowIndex].children[i];
        const filterText = filterCell.textContent.toLowerCase();

        // 조건 체크
        const matchesBranch = (branch === selectedBranch);
        const matchesKeyword = (keyword === '' || filterText.includes(keyword));

        // 각 행의 i번째 li를 보이거나 숨김 처리
        employeeTable.querySelectorAll('ul').forEach(ul => {
            const li = ul.children[i];
            if (li) {
                li.style.display = (matchesBranch && matchesKeyword) ? '' : 'none';
            }
        });
    }
}

// 이벤트 등록
document.getElementById('companyBranch').addEventListener('change', filterTable);
document.getElementById('searchFilter').addEventListener('change', filterTable);
document.getElementById('btnSearch').addEventListener('click', filterTable);

// 초기 로드시 본사만 보이게 필터 적용
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('companyBranch').value = 'head';
    filterTable();
});


// 인적사항 기타 정보
document.querySelector('.category-personal').addEventListener('click', () => {
    // alert('인적사항');
    document.querySelector('.detail-category li:nth-child(1)').style.backgroundColor = '#b9baba';
    document.querySelector('.detail-category li:nth-child(2)').style.backgroundColor = '#fff';
    document.querySelector('.employee-detail-content').style.display = 'flex';
    document.querySelector('.info-contact').style.display = 'flex';
    document.querySelector('.employee-info-section').style.display = 'flex';
});

document.querySelector('.category-other').addEventListener('click', () => {
    // alert('기타정보');
    document.querySelector('.detail-category li:nth-child(1)').style.backgroundColor = '#fff';
    document.querySelector('.detail-category li:nth-child(2)').style.backgroundColor = '#b9baba';
    document.querySelector('.employee-detail-content').style.display = 'none';
    document.querySelector('.info-contact').style.display = 'none';
    document.querySelector('.employee-info-section').style.display = 'none';
});