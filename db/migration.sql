DROP TABLE item IF EXISTS   
DROP TABLE reviews IF EXISTS  

CREATE TABLE item (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL
);
CREATE TABLE reviews (
    "id" SERIAL PRIMARY KEY,
    "rating" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "title" TEXT NOT NULL,
    "review_body" TEXT NOT NULL,
    "recommended" BOOLEAN NOT NULL,
    "helpful_yes" INTEGER NOT NULL,
    "helpful_no" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL,
    FOREIGN KEY (item_id) REFERENCES Item(id) ON DELETE CASCADE
);