CREATE TABLE Companies (
    id INTEGER(10),
    web_id INTEGER(10),
    name VARCHAR(64),
    host VARCHAR(32)
);

CREATE TABLE Users (
    id INTEGER NOT NULL PRIMARY KEY,
    web_id INTEGER(10),
    email VARCHAR(255) UNIQUE,
    display_name VARCHAR(255),
    company_id INTEGER(10)
);
