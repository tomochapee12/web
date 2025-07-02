// functions/api/counter.js

/**
 * カウンターの値を取得するハンドラ
 * @param {object} context - Cloudflare Pagesのコンテキスト
 */
export async function onRequestGet({ env }) {
  // KVから 'views' というキーで値を取得する
  // 値がまだ存在しない場合は '0' をデフォルト値とする
  const count = await env.PORTFOLIO_COUNTER.get('views') || '0';
  
  return new Response(count, {
    headers: { 'Content-Type': 'text/plain' },
  });
}

/**
 * カウンターの値をインクリメントするハンドラ
 * @param {object} context - Cloudflare Pagesのコンテキスト
 */
export async function onRequestPost({ env }) {
  // 現在の値を取得（なければ0）
  let count = parseInt(await env.PORTFOLIO_COUNTER.get('views') || '0');
  
  // 1増やす
  count++;
  
  // 新しい値をKVに保存する
  await env.PORTFOLIO_COUNTER.put('views', count.toString());
  
  // 更新後の値を返す
  return new Response(count.toString(), {
    headers: { 'Content-Type': 'text/plain' },
  });
}