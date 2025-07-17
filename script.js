* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(to right, #f8fbff, #e0f7ff);
  color: #333;
  padding: 40px 20px;
}

.container {
  max-width: 700px;
  margin: auto;
  background: #ffffff;
  padding: 30px 40px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

h1, h2 {
  text-align: center;
  color: #1d3557;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #1d3557;
}

input[type="number"] {
  width: 100%;
  padding: 10px;
  border: 2px solid #a8dadc;
  border-radius: 8px;
  font-size: 1em;
  background-color: #f1faee;
}

input[type="number"]:focus {
  outline: none;
  border-color: #457b9d;
  background-color: #e0f7ff;
}

.btn {
  background-color: #1d3557;
  color: white;
  padding: 12px;
  font-size: 1.1em;
  border: none;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #457b9d;
}

.results {
  margin-top: 30px;
  background-color: #f1faee;
  padding: 20px;
  border-radius: 10px;
  border-left: 5px solid #1d3557;
}

.results p {
  font-size: 1.1em;
  margin: 10px 0;
}

.table-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #f9f9f9;
}

table th, table td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
}

table th {
  background-color: #a8dadc;
  color: #1d3557;
}

.hidden {
  display: none;
}
