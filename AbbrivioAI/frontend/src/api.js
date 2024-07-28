// src/api.js

export async function generateSummary(text) {
    const response = await fetch('http://localhost:8000/api/generate-summary/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.summary;
}

export async function summarizePdf(pdfFile) {
    const formData = new FormData();
    formData.append('pdf', pdfFile);

    const response = await fetch('http://localhost:8000/api/summarize-pdf/', {
        method: 'POST',
        headers: {
            // 'Content-Type': 'multipart/form-data' not needed with FormData
        },
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.summary;
}
