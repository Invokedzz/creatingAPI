-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fanfic_creation" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "genre" TEXT,
    "characters" TEXT,
    "epilogue" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "fanficid" TEXT NOT NULL,

    CONSTRAINT "fanfic_creation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "fanfic_creation" ADD CONSTRAINT "fanfic_creation_fanficid_fkey" FOREIGN KEY ("fanficid") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
