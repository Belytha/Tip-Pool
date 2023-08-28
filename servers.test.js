describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update servertable', function () {
    submitServerInfo();
    updateServerTable();
    let curRow = document.querySelectorAll('#serverTable tbody tr td');

    expect(curRow.length).toEqual(3);
    expect(curRow[0].innerText).toEqual('Alice');
    expect(curRow[1].innerText).toEqual('$0.00');
    expect(curRow[2].innerText).toEqual('X');
  });

  it('should not add a new server on submitServerInfo() with empty input', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  afterEach(function() {
    allServers = {};
    serverId = 0;
    serverTbody.innertHTML = "";
  });
});
