-- CreateTable
CREATE TABLE "MenuItem" (
    "id" SERIAL NOT NULL,
    "Price" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,

    CONSTRAINT "MenuItem_pkey" PRIMARY KEY ("id")
);
