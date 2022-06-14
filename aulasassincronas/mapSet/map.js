function getAdmins(map) {
    return map.filter(function (item) {
        return item.role === 'admin';
    });
}

const users = new map();
users.set('João', 'Admin');
users.set('Maria', 'User');
users.set('Pedro', 'Admin');
users.set('Ana', 'User');