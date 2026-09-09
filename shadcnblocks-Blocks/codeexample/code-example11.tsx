"use client";

import { useState } from "react";
import { FaGithub } from "react-icons/fa";

import type { BundledLanguage } from "@/components/kibo-ui/code-block";
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockFiles,
  CodeBlockHeader,
  CodeBlockItem,
} from "@/components/kibo-ui/code-block";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const codeExamples: Record<
  string,
  {
    name: string;
    icon: string;
    className?: string;
    frameworks: Array<{
      id: string;
      name: string;
      icon: string;
      className?: string;
      code: Array<{
        language: string;
        filename: string;
        code: string;
      }>;
    }>;
  }
> = {
  nodejs: {
    name: "Node.js",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nodejs.svg",
    frameworks: [
      {
        id: "nodejs",
        name: "Node.js",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/javascript-icon.svg",
        code: [
          {
            language: "javascript",
            filename: "connect-db.js",
            code: `import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'mydb',
  user: 'user',
  password: 'password'
});

(async function() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW()');
    console.log('Connected:', result.rows[0]);
    client.release();
  } catch (error) {
    console.error('Connection error:', error);
  }
})();`,
          },
        ],
      },
      {
        id: "nextjs",
        name: "Next.js",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs.svg",
        code: [
          {
            language: "typescript",
            filename: "app/api/data/route.ts",
            code: `import { Pool } from 'pg';
import { NextResponse } from 'next/server';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

export async function GET() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM users LIMIT 10');
    client.release();
    return NextResponse.json(result.rows);
  } catch (error) {
    return NextResponse.json(
      { error: 'Database query failed' },
      { status: 500 }
    );
  }
}`,
          },
        ],
      },
      {
        id: "remix",
        name: "Remix",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/remix-icon.svg",
        className: "dark:invert",
        code: [
          {
            language: "typescript",
            filename: "app/routes/data.ts",
            code: `import { Pool } from 'pg';
import { json, type LoaderFunctionArgs } from '@remix-run/node';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM posts ORDER BY created_at DESC');
    client.release();
    return json({ posts: result.rows });
  } catch (error) {
    return json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}`,
          },
        ],
      },
      {
        id: "nuxt",
        name: "Nuxt",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nuxt.svg",
        code: [
          {
            language: "typescript",
            filename: "server/api/data.get.ts",
            code: `import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

export default defineEventHandler(async (event) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM products WHERE active = true');
    client.release();
    return result.rows;
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Database query failed'
    });
  }
});`,
          },
        ],
      },
    ],
  },
  python: {
    name: "Python",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/python-icon.svg",
    frameworks: [
      {
        id: "python",
        name: "Python",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/python-icon.svg",
        code: [
          {
            language: "python",
            filename: "connect_db.py",
            code: `import psycopg2
from psycopg2 import pool

connection_pool = psycopg2.pool.SimpleConnectionPool(
    1, 20,
    host="localhost",
    port=5432,
    database="mydb",
    user="user",
    password="password"
)

try:
    conn = connection_pool.getconn()
    cursor = conn.cursor()
    cursor.execute("SELECT version();")
    version = cursor.fetchone()
    print(f"Connected: {version[0]}")
    cursor.close()
    connection_pool.putconn(conn)
except Exception as error:
    print(f"Connection error: {error}")`,
          },
        ],
      },
      {
        id: "django",
        name: "Django",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/django.svg",
        code: [
          {
            language: "python",
            filename: "views.py",
            code: `from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.db import connection
import json

def get_data(request):
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT id, name, email FROM users LIMIT 10")
            columns = [col[0] for col in cursor.description]
            rows = [dict(zip(columns, row)) for row in cursor.fetchall()]
        
        if not rows:
            return JsonResponse({"users": [], "message": "No users found"}, safe=False)
        
        return JsonResponse({"users": rows}, safe=False)
    except Exception as error:
        return JsonResponse({"error": str(error)}, status=500)`,
          },
        ],
      },
      {
        id: "flask",
        name: "Flask",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/flask.svg",
        className: "dark:invert",
        code: [
          {
            language: "python",
            filename: "app.py",
            code: `from flask import Flask, jsonify
import psycopg2
import os

app = Flask(__name__)

def get_db_connection():
    return psycopg2.connect(
        host=os.environ.get('DB_HOST', 'localhost'),
        database=os.environ.get('DB_NAME'),
        user=os.environ.get('DB_USER'),
        password=os.environ.get('DB_PASSWORD')
    )

@app.route('/data', methods=['GET'])
def get_data():
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM items ORDER BY id DESC LIMIT 10')
        rows = cursor.fetchall()
        cursor.close()
        conn.close()
        return jsonify({"items": rows})
    except Exception as error:
        return jsonify({"error": str(error)}), 500`,
          },
        ],
      },
      {
        id: "fastapi",
        name: "FastAPI",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/fastapi.svg",
        code: [
          {
            language: "python",
            filename: "main.py",
            code: `from fastapi import FastAPI, HTTPException
import asyncpg
import os

app = FastAPI()

async def get_db_pool():
    return await asyncpg.create_pool(
        host=os.environ.get('DB_HOST', 'localhost'),
        database=os.environ.get('DB_NAME'),
        user=os.environ.get('DB_USER'),
        password=os.environ.get('DB_PASSWORD')
    )

@app.get("/data")
async def get_data():
    try:
        pool = await get_db_pool()
        async with pool.acquire() as conn:
            rows = await conn.fetch('SELECT * FROM articles ORDER BY created_at DESC')
        return {"articles": [dict(row) for row in rows]}
    except Exception as error:
        raise HTTPException(status_code=500, detail=str(error))`,
          },
        ],
      },
    ],
  },
  go: {
    name: "Go",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/go.svg",
    frameworks: [
      {
        id: "go",
        name: "Go",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/go.svg",
        code: [
          {
            language: "go",
            filename: "connect_db.go",
            code: `package main

import (
    "database/sql"
    "fmt"
    _ "github.com/lib/pq"
)

func main() {
    connStr := "host=localhost port=5432 user=user password=password dbname=mydb sslmode=disable"
    db, err := sql.Open("postgres", connStr)
    if err != nil {
        fmt.Println("Connection error:", err)
        return
    }
    defer db.Close()
    
    err = db.Ping()
    if err != nil {
        fmt.Println("Ping error:", err)
        return
    }
    
    fmt.Println("Successfully connected to database")
}`,
          },
        ],
      },
    ],
  },
  rust: {
    name: "Rust",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/rust.svg",
    className: "dark:invert",
    frameworks: [
      {
        id: "rust",
        name: "Rust",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/rust.svg",
        className: "dark:invert",
        code: [
          {
            language: "rust",
            filename: "connect_db.rs",
            code: `use tokio_postgres::{NoTls, Error};

#[tokio::main]
async fn main() -> Result<(), Error> {
    let (client, connection) = tokio_postgres::connect(
        "host=localhost user=user password=password dbname=mydb",
        NoTls,
    ).await?;
    
    tokio::spawn(async move {
        if let Err(e) = connection.await {
            eprintln!("Connection error: {}", e);
        }
    });
    
    let rows = client
        .query("SELECT version()", &[])
        .await?;
    
    for row in rows {
        let version: String = row.get(0);
        println!("Connected: {}", version);
    }
    
    Ok(())
}`,
          },
        ],
      },
    ],
  },
};

interface CodeExample11Props {
  className?: string;
}

const CodeExample11 = ({ className }: CodeExample11Props) => {
  const [selectedFramework, setSelectedFramework] = useState("nodejs");
  const [selectedLanguage, setSelectedLanguage] = useState("nodejs");

  const languages = Object.entries(codeExamples).map(([id, lang]) => ({
    id,
    name: lang.name,
    icon: lang.icon,
    className: lang.className,
  }));

  const availableFrameworks =
    codeExamples[selectedLanguage]?.frameworks ||
    codeExamples.nodejs.frameworks;

  const handleLanguageChange = (languageId: string) => {
    setSelectedLanguage(languageId);
    const frameworks =
      codeExamples[languageId]?.frameworks || codeExamples.nodejs.frameworks;
    if (frameworks.length > 0) {
      setSelectedFramework(frameworks[0].id);
    }
  };

  const getCodeData = () => {
    const language = codeExamples[selectedLanguage] || codeExamples.nodejs;
    const framework = language.frameworks.find(
      (f) => f.id === selectedFramework,
    );
    return framework?.code || language.frameworks[0]?.code || [];
  };

  const codeData = getCodeData();

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Connect in seconds
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
              Seamless database integration with native drivers for every
              framework. Get up and running with your data layer in no time.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap items-center justify-center gap-6">
            {languages.map((language) => (
              <button
                key={language.id}
                onClick={() => handleLanguageChange(language.id)}
                className="group flex flex-col items-center gap-2"
              >
                <span
                  className={cn(
                    "flex size-12 items-center justify-center rounded-lg border",
                    selectedLanguage === language.id
                      ? "border-primary"
                      : "border-border",
                  )}
                >
                  <img
                    src={language.icon}
                    alt={language.name}
                    className={cn("size-6", language.className)}
                  />
                </span>
                <span
                  className={cn(
                    "text-xs text-muted-foreground group-hover:text-foreground",
                    selectedLanguage === language.id
                      ? "text-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  {language.name}
                </span>
              </button>
            ))}
          </div>

          <div className="mb-4 md:hidden">
            <Select
              value={selectedFramework}
              onValueChange={setSelectedFramework}
            >
              <SelectTrigger className="w-full">
                <SelectValue>
                  <div className="flex items-center gap-2">
                    <img
                      src={
                        availableFrameworks.find(
                          (f) => f.id === selectedFramework,
                        )?.icon || availableFrameworks[0]?.icon
                      }
                      alt={
                        availableFrameworks.find(
                          (f) => f.id === selectedFramework,
                        )?.name || availableFrameworks[0]?.name
                      }
                      className={cn(
                        "size-4",
                        availableFrameworks.find(
                          (f) => f.id === selectedFramework,
                        )?.className || availableFrameworks[0]?.className,
                      )}
                    />
                    <span>
                      {availableFrameworks.find(
                        (f) => f.id === selectedFramework,
                      )?.name || availableFrameworks[0]?.name}
                    </span>
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {availableFrameworks.map((framework) => (
                  <SelectItem key={framework.id} value={framework.id}>
                    <div className="flex items-center gap-2">
                      <img
                        src={framework.icon}
                        alt={framework.name}
                        className={cn("size-4", framework.className)}
                      />
                      <span>{framework.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Tabs
            value={selectedFramework}
            onValueChange={setSelectedFramework}
            className="hidden md:block"
          >
            <TabsList className="mb-4 h-auto justify-start">
              {availableFrameworks.map((framework) => (
                <TabsTrigger
                  key={framework.id}
                  value={framework.id}
                  className="flex min-w-40 items-center gap-2"
                >
                  <img
                    src={framework.icon}
                    alt={framework.name}
                    className={cn("size-4", framework.className)}
                  />
                  <span>{framework.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          <CodeBlock
            data={codeData}
            value={codeData?.[0]?.language || "javascript"}
            className="w-full"
          >
            <CodeBlockHeader className="justify-between">
              <CodeBlockFiles>
                {(item) => (
                  <CodeBlockFilename key={item.language} value={item.language}>
                    {item.filename}
                  </CodeBlockFilename>
                )}
              </CodeBlockFiles>
              <CodeBlockCopyButton
                onCopy={() => console.log("Copied code to clipboard")}
                onError={() =>
                  console.error("Failed to copy code to clipboard")
                }
              />
            </CodeBlockHeader>
            <ScrollArea className="w-full">
              <CodeBlockBody>
                {(item) => (
                  <CodeBlockItem
                    key={item.language}
                    value={item.language}
                    className="max-h-96 w-full"
                  >
                    <CodeBlockContent
                      language={item.language as BundledLanguage}
                    >
                      {item.code}
                    </CodeBlockContent>
                  </CodeBlockItem>
                )}
              </CodeBlockBody>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </CodeBlock>
          <Separator className="mt-5 mb-4" />
          <Button variant="link" className="h-auto p-0" asChild>
            <a href="#">
              <FaGithub />
              View documentation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { CodeExample11 };
