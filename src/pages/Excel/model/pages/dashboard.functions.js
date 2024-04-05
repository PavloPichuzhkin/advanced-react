import { t } from 'i18next';
import { storage } from '../core/utils';

function toHTML(key) {
    const [path, param] = key.split(': ');
    const model = storage(key);

    const dateOf = (dateOf) => {
        return `${new Date(dateOf).toLocaleDateString()} 
        ${new Date(dateOf).toLocaleTimeString()}`;
    };

    return `
    <li class="db__record">
      <a href="#${path}/${param}">${t(model.title)}</a>
      <div>
        ${dateOf(model.createdDate)}
      </div>
      <div>
        ${dateOf(model.editedDate)}
      </div>
      <div>  
        ${dateOf(model.openedDate)}
      </div>
    </li>
  `;
}

function getAllKeys() {
    const keys = [];
    for (let i = 0; i < localStorage.length; i += 1) {
        const key = localStorage.key(i);
        if (!key.includes('excel')) {
            // eslint-disable-next-line no-continue
            continue;
        }
        keys.push(key);
    }
    return keys;
}

export function createRecordsTable() {
    const keys = getAllKeys();

    if (!keys.length) {
        return `<p>${t('You have not created any tables')}</p>`;
    }

    return `
    <div class="db__list-header">
      <span>${t('Table name')}</span>
      <span>${t('Created date')}</span>
      <span>${t('Edited date')}</span>      
      <span>${t('Opened date')}</span>      
    </div>

    <ul class="db__list">
      ${keys.map(toHTML).join('')}
    </ul>
  `;
}
