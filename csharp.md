# Inc. features aka the future of csharp
Collection of my favourite proposals from [dotnet/csharplang](https://github.com/dotnet/csharplang) in alphabetical order.

- [Async Streams](#async-streams)
- [Covariant Return Types](#covariant-return-types)
- [Default Interface Methods](#default-interface-methods)
- [Do Query Termination](#do-query-termination)
- [Extension Everything](#extension-everything)
- [Generic Attributes](#generic-attributes)
- [Get-Set Expression-Bodied Members](#get-set-expression-bodied-members)
- [More Expressions](#more-expressions)
- [Negated-Condition](#negated-condition)
- [Null Coalescing Assignment](#null-coalescing-assignment)
- [Null-Conditional Await](#null-conditional-await)
- [Records](#records)
- [Slicing](#slicing)
- [Target-Typed New Expression](#targeted-type-new-expression)
- [With Keyword](#with-keyword)

# [Async Streams](https://github.com/dotnet/csharplang/blob/master/proposals/async-streams.md#async-streams)
```cs
async IAsyncEnumerable<int> MyIterator()
{
  try
  {
    for (int i = 0; i < 100; i++)
    {
      await Task.Delay(100);
      yield return i;
    }
  }
  finally
  {
    await Task.Delay(200);
    Console.WriteLine("finally");
  }
}

foreach await (int item in MyIterator().ConfigureAwait(false))
{
  Console.WriteLine(item.ToString());
}
```

# [Covariant Return Types](https://github.com/dotnet/csharplang/issues/49)
```cs
class Compilation
{
  virtual Compilation WithOptions(Options options);
}

class CSharpCompilation : Compilation
{
  override CSharpCompilation WithOptions(Options options);
}
```

# [Default Interface Methods](https://github.com/dotnet/csharplang/blob/master/proposals/default-interface-methods.md#default-interface-methods)
```cs
interface ILogger
{
  void Log()
  {
    Console.WriteLine("Default ILogger.Log");
  }
}
```

# [Do Query Termination](https://github.com/dotnet/csharplang/issues/101)
```cs
from player in leaderboard.Players
where player.Rank <= 10
let rank = PlayerDB.Find(player).Id
do
{
  Console.WriteLine($"[{id}] -> {player.Name}");
}
```

# [Extension Everything](https://github.com/dotnet/roslyn/issues/11159)
```cs
extension Enrollee extends Person
{
  // Static field
  static Dictionary<Person, Professor> enrollees =
    new Dictionary<Person, Professor>();
 
  // Instance method
  public void Enroll(Professor supervisor) =>
    enrollees[this] = supervisor;
 
  // Instance property
  public Professor Supervisor =>
    enrollees.TryGetValue(this, out var supervisor)
      ? supervisor
      : null;
 
  // Static property
  public static ICollection<Person> Students => enrollees.Keys;
 
  // Instance constructor
  public Person(string name, Professor supervisor)
    : this(name)
  {
    this.Enroll(supervisor);
  }
}
```

# [Generic Attributes](https://github.com/dotnet/csharplang/issues/124)
```cs
class GenericAttribute<T> : Attribute
{
}

[Generic<int>]
class MyClass
{
}
```

# [Get-Set Expression-Bodied Members](https://github.com/dotnet/csharplang/issues/1007)
```cs
// Nowadays
public int X
{
    get => _point.X;
    set => _point.X = value;
}

// Future
public int X <=> _point.X;
```

# [More Expressions](https://github.com/dotnet/csharplang/issues/867)
```cs
// Nowadays
var obj = Get();
if (obj == null) return;

// Future 
var obj = Get() ?? return;

// Also
obj = (isPlaying) ? Get() : break;
obj = (isPlaying) ? Get() : continue;
obj = (isPlaying) ? Get() : goto;
```

# [Negated-Condition](https://github.com/dotnet/csharplang/issues/882)
```cs
// Just another coding convention
if !(isPlaying)
{
}

while !(isPlaying)
{
}

do
{
} while !(isPlaying);
```

# [Null Coalescing Assignment](https://github.com/dotnet/csharplang/blob/master/proposals/null-coalecing-assignment.md#null-coalescing-assignment)
```cs
// Past
if (x == null) x = Get();

// Nowadays
x = x ?? Get();

// Future
x ??= Get();
```

# [Null-Conditional Await](https://github.com/dotnet/csharplang/blob/master/proposals/null-conditional-await.md#null-conditional-await)
```cs
// Nowadays
if (task != null) await task;

// Future
await? task;
```

# [Records](https://github.com/dotnet/csharplang/blob/master/proposals/records.md#records)
```cs
public struct Pair(object First, object Second);

// Generated
public struct Pair : IEquatable<Pair>
{
  public object First { get; }
  public object Second { get; }
  public Pair(object First, object Second)
  {
    this.First = First;
    this.Second = Second;
  }
  public bool Equals(Pair other) // for IEquatable<Pair>
  {
    return Equals(First, other.First) && Equals(Second, other.Second);
  }
  public override bool Equals(object other)
  {
    return (other as Pair)?.Equals(this) == true;
  }
  public override int GetHashCode()
  {
    return (First?.GetHashCode()*17 + Second?.GetHashCode()).GetValueOrDefault();
  }
  public Pair With(object First = this.First, object Second = this.Second) => new Pair(First, Second);
  public void Deconstruct(out object First, out object Second)
  {
    First = self.First;
    Second = self.Second;
  }
}
```

# [Slicing](https://github.com/dotnet/csharplang/issues/185)
```cs
var slice = source[5..10];

foreach (var i in 5..10)
  Console.WriteLine(i);
```

# [Target-Typed New Expression](https://github.com/dotnet/csharplang/issues/100)
```cs
// Nowadays
Dictionary<string, List<int>> _cache = new Dictionary<string, List<int>>();

// Future
Dictionary<string, List<int>> _cache = new();
```

# [With Keyword](https://github.com/dotnet/csharplang/issues/162)
```cs
var obj = new Person("Hansi", 22);
obj with { Name = "Hans", Age = 32 };
```