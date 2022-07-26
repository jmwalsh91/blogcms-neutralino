import RichTextEditor from '@mantine/rte';
import React, { useState } from 'react'

const initialValue =
  '<p>Your initial <b>html value</b> or an empty string to init editor without value</p>';

function Compose() {
    const [value, onChange] = useState<string>(initialValue);
    return <RichTextEditor value={value} onChange={onChange} />;
}

export default Compose