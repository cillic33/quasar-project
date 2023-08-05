const columns = [
    {
        name: 'name',
        required: true,
        label: 'Шаблон опроса',
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true
    },
    {name: 'tp', label: 'ТП', field: 'tp', align: 'left'},
    {name: 'frequency', label: 'Периодичность', field: 'frequency', align: 'left'},
    {name: 'pd', label: 'ДП', field: 'pd',  align: 'center'},
    {name: 'sm', label: 'МПр', field: 'sm',  align: 'center'},
    {name: 'informed', label: 'Информируемые', field: 'informed',  align: 'left'},
    {name: 'year', label: 'Год', field: 'year',  align: 'center'},
    {name: 'status', label: 'Статус', field: 'status',  align: 'left'},
]
export default columns;
