function toButton(button) {
    const meta = `
    data-type="button"
    data-value='${JSON.stringify(button.value)}'    
  `;

    return `
    <div 
      class="button ${button.active ? 'active' : ''}"
      ${meta}
    >
      <i 
        class="material-icons"
        ${meta}
      >${button.icon}</i>
    </div>
  `;
}

export function createToolbar(state) {
    const formatAlign = ['left', 'center', 'right'].map((position) => {
        return {
            icon: `format_align_${position}`,
            active: position === state.textAlign,
            value: { textAlign: position },
        };
    });

    const buttons = [
        ...formatAlign,

        {
            icon: 'format_bold',
            active: state.fontWeight === 'bold',
            value: {
                fontWeight: state.fontWeight === 'bold' ? 'normal' : 'bold',
            },
        },
        {
            icon: 'format_italic',
            active: state.fontStyle === 'italic',
            value: {
                fontStyle: state.fontStyle === 'italic' ? 'normal' : 'italic',
            },
        },
        {
            icon: 'format_underlined',
            active: state.textDecoration === 'underline',
            value: {
                textDecoration:
                    state.textDecoration === 'underline' ? 'none' : 'underline',
            },
        },
    ];
    return buttons.map(toButton).join('');
}
