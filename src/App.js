import React, { useState } from 'react';
import { Container, TextField, Button, Paper, Typography, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import './styles.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post('https://api.deepseek.com/v1/chat/completions', {
        messages: [...messages, userMessage],
        model: 'deepseek-chat',
        temperature: 0.7,
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_DEEPSEEK_API_KEY}`,
          'Content-Type': 'application/json',
        },
      });

      const assistantMessage = response.data.choices[0].message;
      setMessages(prevMessages => [...prevMessages, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      alert('Произошла ошибка при отправке сообщения');
    }

    setLoading(false);
  };

  return (
    <Container maxWidth="md" className="app-container">
      <Paper elevation={3} className="chat-container">
        <Typography variant="h4" gutterBottom align="center">
          DeepSeek AI Чат
        </Typography>
        
        <Box className="messages-container">
          {messages.map((message, index) => (
            <Paper 
              key={index} 
              className={`message ${message.role === 'user' ? 'user-message' : 'assistant-message'}`}
            >
              <Typography>{message.content}</Typography>
            </Paper>
          ))}
          {loading && <Typography>Загрузка...</Typography>}
        </Box>

        <Box className="input-container">
          <TextField
            fullWidth
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Введите ваше сообщение..."
            variant="outlined"
          />
          <Button
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            onClick={sendMessage}
            disabled={loading}
          >
            Отправить
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
