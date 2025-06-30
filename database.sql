IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = N'FecafFlix')
BEGIN
    CREATE DATABASE FecafFlix;
END;
GO

USE FecafFlix;
GO

IF OBJECT_ID('tbl_filme', 'U') IS NOT NULL
    DROP TABLE tbl_filme;
GO

CREATE TABLE tbl_filme (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nome NVARCHAR(255) NOT NULL,
    sinopse NVARCHAR(MAX),
    duracao VARCHAR(8),
    data_lancamento DATE,
    data_relancamento DATE,
    foto_capa NVARCHAR(255),
    valor_unitario DECIMAL(8,2)
);
GO

INSERT INTO tbl_filme (nome, sinopse, duracao, data_lancamento, foto_capa, valor_unitario) VALUES
('O Poderoso Chefão', 'Don Vito Corleone, chefe de uma família mafiosa, lida com a sucessão de seu império.', '02:55:00', '1972-03-24', 'https://example.com/poderoso_chefao.jpg', 25.00),
('Um Sonho de Liberdade', 'Dois homens presos encontram consolo e redenção através de atos de decência comum.', '02:22:00', '1994-09-23', 'https://example.com/sonho_liberdade.jpg', 20.00),
('A Origem', 'Um ladrão que rouba segredos corporativos através do uso de tecnologia de sonho é encarregado da tarefa inversa de plantar uma ideia na mente de um CEO.', '02:28:00', '2010-07-16', 'https://example.com/a_origem.jpg', 30.00),
('Interestelar', 'Uma equipe de exploradores viaja através de um buraco de minhoca no espaço em uma tentativa de garantir a sobrevivência da humanidade.', '02:49:00', '2014-11-07', 'https://example.com/interestelar.jpg', 28.00),
('Matrix', 'Um programador de computador descobre que a realidade é uma simulação criada por máquinas.', '02:16:00', '1999-03-31', 'https://example.com/matrix.jpg', 22.00);
GO
