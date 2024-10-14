-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN DEFAULT false,
    "collegeName" TEXT,
    "graduated" BOOLEAN,
    "currrntSem" INTEGER,
    "working" BOOLEAN DEFAULT false,
    "freelanceExperience" BOOLEAN NOT NULL DEFAULT false,
    "onSiteInternship" BOOLEAN NOT NULL DEFAULT false,
    "remoteJobExperience" BOOLEAN NOT NULL DEFAULT false,
    "portfolioURL" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Link" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "portfolio" TEXT,
    "linkedin" TEXT,
    "twitter" TEXT,
    "github" TEXT,
    "discord" TEXT,
    "reddit" TEXT,
    "leetcode" TEXT,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_password_key" ON "User"("password");

-- CreateIndex
CREATE UNIQUE INDEX "User_portfolioURL_key" ON "User"("portfolioURL");

-- CreateIndex
CREATE UNIQUE INDEX "Link_userId_key" ON "Link"("userId");

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
