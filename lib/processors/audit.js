const fs = require('fs');

const dir = './.logs/';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const exec = (req, result) => {
  const data = JSON.stringify(result, null, 2);
  fs.writeFileSync(`${dir}/${result.timestamp}.json`, data);

  const action = {
    action: 'audit',
    ok: true,
  };

  result.actionLog.push(action);

  return result;
};

exec.displayName = 'audit.exec';
exports.exec = exec;
