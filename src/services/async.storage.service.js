export const asyncStorageService = {
    query,
    get,
    post,
    put,
    remove,
    removeAll
};

function query(entityType) {
    let entities = JSON.parse(localStorage.getItem(entityType)) || [];
    return Promise.resolve(entities);
}

function get(entityType, entityId) {
    return query(entityType)
        .then(entities => entities.find(entity => entity.id === entityId));
}

function post(entityType, newEntity) {
    return query(entityType)
        .then(entities => {
            entities.push(newEntity);
            _save(entityType, entities);
            return newEntity;
        });
}

function put(entityType, updatedEntity) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity.id === updatedEntity.id);
            entities.splice(idx, 1, updatedEntity);
            _save(entityType, entities);
            return entities;
        });
}

function remove(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity.id === entityId);
            entities.splice(idx, 1);
            _save(entityType, entities);
            return entities;
        });
}

function removeAll() {
    localStorage.clear();
    return Promise.resolve([]);
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities));
}

