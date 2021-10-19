import React from 'react';
import MDEditor from '@uiw/react-md-editor';

const MarkdownQuestion = () => {
  const [value, setValue] = React.useState('**Hello world!!!**');
  return (
    <div className="MarkdownQuestion">
      <MDEditor
        value={value}
        onChange={setValue}
      />
      {/* <MDEditor.Markdown source={value} /> */}
    </div>
  );
};

export default MarkdownQuestion;
